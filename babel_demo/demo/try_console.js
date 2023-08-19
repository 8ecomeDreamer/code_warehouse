// 需求：支持单一形式的console.log
// 转义前代码： console.log(1);
// 转义后代码： console.log('文件名（行号，列号）：', 1);
// 通用格式架构

// babel转义流程为 parser -> traverse -> generate
function testConsole() {
  const parser = require("@babel/parser");
  const types = require("@babel/types");
  const traverse = require("@babel/traverse").default;
  const generate = require("@babel/generator").default;

  // 定义需要转义的代码
  const sourceCode = `  
console.log(1);

function func() {
    console.info(2);
}

export default class Clazz {
    say() {
        console.debug(3);
    }
    render() {
        return <div>{console.error(4)}</div>
    }
}
`;

  // 上述代码为jsx格式
  const ast = parser.parse(sourceCode, {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  });

  const targetCalleeName = ["log", "info", "error", "debug"].map(
    (item) => `console.${item}`
  );

  // 通过判断代码是否满足console格式从而更改AST代码
  traverse(ast, {
    // 如果不知道AST节点类型可以使用astexplorer查看type属性
    CallExpression(path, state) {
      const calleeName = generate(path.node.callee).code;
      // console.log(calleeName);
      if (targetCalleeName.includes(calleeName)) {
        // console.log(path.node.loc);
        const { line, column } = path.node.loc.start;
        path.node.arguments.unshift(
          types.stringLiteral(`filename:(${line},${column})`)
        );
      }
    },
  });

  // AST的打印阶段
  const { code, map } = generate(ast);
  console.log(code);
}

testConsole();

// 需求：支持数组形式的console.log
// 转义前代码： <div>{[console.log('filename.js(11,22)'), console.log(111)]}</div>
// 转义后代码： console.log('文件名（行号，列号）：', 1);
// 通用格式架构

// 需求：支持单一形式的console.log
// 转义前代码： console.log(1);
// 转义后代码： console.log('文件名（行号，列号）：', 1);

// babel转义流程为 parser -> traverse -> generate

function testArrayConsole() {
  const parser = require("@babel/parser");
  const types = require("@babel/types");
  const traverse = require("@babel/traverse").default;
  const generate = require("@babel/generator").default;
  const template = require("@babel/template").default;

  // 定义需要转义的代码
  const sourceCode = `<div>{[console.log('filename.js(11,22)'), console.log(111)]}</div>`;

  // 上述代码为jsx格式
  const ast = parser.parse(sourceCode, {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  });

  const targetCalleeName = ["log", "info", "error", "debug"].map(
    (item) => `console.${item}`
  );

  // 通过判断代码是否满足console格式从而更改AST代码
  traverse(ast, {
    // 如果不知道AST节点类型可以使用astexplorer查看type属性
    CallExpression(path, state) {
      if (path.node.isNew) {
        return;
      }
      const calleeName = generate(path.node.callee).code;
      if (targetCalleeName.includes(calleeName)) {
        const { line, column } = path.node.loc.start;

        const newNode = template.expression(
          `console.log("filename: (${line}, ${column})")`
        )();
        newNode.isNew = true;

        if (path.findParent((path) => path.isJSXElement())) {
          path.replaceWith(types.arrayExpression([newNode, path.node]));
          path.skip();
        } else {
          path.insertBefore(newNode);
        }
      }
    },
  });

  // AST的打印阶段
  const { code, map } = generate(ast);
  console.log(code);
}

testArrayConsole();
