function id(x) { return x[0]; }
const ws = { match: /\s*/, lineBreaks: true }; // define ws to match whitespace
const grammar = {
   Lexer: undefined,
   ParserRules: [
   {"name": "expression", "symbols": ["term"], "postprocess": id},
   {"name": "term", "symbols": ["term", "_", {"literal":"+"}, "_", "expression"], "postprocess": ([left, , , , right]) => left + right},
   {"name": "term", "symbols": ["term", "_", {"literal":"-"}, "_", "expression"], "postprocess": ([left, , , , right]) => left - right},
   {"name": "term", "symbols": ["factor"], "postprocess": id},
   {"name": "factor", "symbols": ["factor", "_", {"literal":"*"}, "_", "term"], "postprocess": ([left, , , , right]) => left * right},
   {"name": "factor", "symbols": ["factor", "_", {"literal":"/"}, "_", "term"], "postprocess": ([left, , , , right]) => left / right},
   {"name": "factor", "symbols": [{"literal":"("}, "_", "expression", "_", {"literal":")"}], "postprocess": ([, , expr]) => expr},
   {"name": "factor", "symbols": ["number"], "postprocess": id},
   {"name": "number$ebnf$1", "symbols": [/[0-9]/]},
   {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
   {"name": "number", "symbols": ["number$ebnf$1"], "postprocess": ([digits]) => Number(digits.join(''))},
   {"name": "_", "symbols": [ws], "postprocess": null}
   ],
   ParserStart: "expression"
}

export const { ParserRules, ParserStart } = grammar;