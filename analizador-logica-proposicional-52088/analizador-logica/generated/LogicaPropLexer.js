// Generated from c:/Users/Zaii/Desktop/FACULTAD/SINTAXIS TPS/analizador-logica-proposicional-52088/analizador-logica/LogicaProp.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,51,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,27,8,
1,1,2,1,2,1,2,1,2,3,2,33,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,
4,8,46,8,8,11,8,12,8,47,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
17,9,1,0,4,3,0,33,33,126,126,172,172,2,0,65,90,97,122,1,0,48,57,3,0,9,10,
13,13,32,32,55,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,26,
1,0,0,0,5,32,1,0,0,0,7,34,1,0,0,0,9,36,1,0,0,0,11,38,1,0,0,0,13,40,1,0,0,
0,15,42,1,0,0,0,17,45,1,0,0,0,19,20,5,45,0,0,20,21,5,62,0,0,21,2,1,0,0,0,
22,27,5,8744,0,0,23,24,5,92,0,0,24,27,5,47,0,0,25,27,5,124,0,0,26,22,1,0,
0,0,26,23,1,0,0,0,26,25,1,0,0,0,27,4,1,0,0,0,28,33,5,8743,0,0,29,30,5,47,
0,0,30,33,5,92,0,0,31,33,5,38,0,0,32,28,1,0,0,0,32,29,1,0,0,0,32,31,1,0,
0,0,33,6,1,0,0,0,34,35,7,0,0,0,35,8,1,0,0,0,36,37,5,40,0,0,37,10,1,0,0,0,
38,39,5,41,0,0,39,12,1,0,0,0,40,41,7,1,0,0,41,14,1,0,0,0,42,43,7,2,0,0,43,
16,1,0,0,0,44,46,7,3,0,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,
1,0,0,0,48,49,1,0,0,0,49,50,6,8,0,0,50,18,1,0,0,0,4,0,26,32,47,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicaPropLexer extends antlr4.Lexer {

    static grammarFileName = "LogicaProp.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'->'", null, null, null, "'('", "')'" ];
	static symbolicNames = [ null, "IMPLICA", "OR", "AND", "NOT", "LPAREN", 
                          "RPAREN", "LETTER", "DIGIT", "WS" ];
	static ruleNames = [ "IMPLICA", "OR", "AND", "NOT", "LPAREN", "RPAREN", 
                      "LETTER", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicaPropLexer.EOF = antlr4.Token.EOF;
LogicaPropLexer.IMPLICA = 1;
LogicaPropLexer.OR = 2;
LogicaPropLexer.AND = 3;
LogicaPropLexer.NOT = 4;
LogicaPropLexer.LPAREN = 5;
LogicaPropLexer.RPAREN = 6;
LogicaPropLexer.LETTER = 7;
LogicaPropLexer.DIGIT = 8;
LogicaPropLexer.WS = 9;



