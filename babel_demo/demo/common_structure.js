// 通用格式架构

// babel转义流程为 parser -> traverse -> generate
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

// 定义需要转义的代码
const sourceCode = `console.log(1)`;

// 根据内容是否有import或export判读是module还是script 再转义为AST源码
const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
});

// AST源码遍历修改 在此阶段对代码进行增删改查
traverse(ast, {
  CallExpression(path, state) {},
});

// AST的打印阶段
const { code, map } = generate(ast);
console.log(code, map);
