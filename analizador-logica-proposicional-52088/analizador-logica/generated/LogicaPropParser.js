// Generated from c:/Users/Zaii/Desktop/FACULTAD/SINTAXIS TPS/analizador-logica-proposicional-52088/analizador-logica/LogicaProp.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicaPropListener from './LogicaPropListener.js';
import LogicaPropVisitor from './LogicaPropVisitor.js';

const serializedATN = [4,1,9,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,1,1,3,1,23,8,1,1,2,1,2,1,2,5,
2,28,8,2,10,2,12,2,31,9,2,1,3,1,3,1,3,5,3,36,8,3,10,3,12,3,39,9,3,1,4,1,
4,1,4,3,4,44,8,4,1,5,1,5,1,5,1,5,1,5,3,5,51,8,5,1,6,1,6,5,6,55,8,6,10,6,
12,6,58,9,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,7,8,59,0,16,1,0,
0,0,2,19,1,0,0,0,4,24,1,0,0,0,6,32,1,0,0,0,8,43,1,0,0,0,10,50,1,0,0,0,12,
52,1,0,0,0,14,59,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,0,19,22,
3,4,2,0,20,21,5,1,0,0,21,23,3,2,1,0,22,20,1,0,0,0,22,23,1,0,0,0,23,3,1,0,
0,0,24,29,3,6,3,0,25,26,5,2,0,0,26,28,3,6,3,0,27,25,1,0,0,0,28,31,1,0,0,
0,29,27,1,0,0,0,29,30,1,0,0,0,30,5,1,0,0,0,31,29,1,0,0,0,32,37,3,8,4,0,33,
34,5,3,0,0,34,36,3,8,4,0,35,33,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,
1,0,0,0,38,7,1,0,0,0,39,37,1,0,0,0,40,41,5,4,0,0,41,44,3,8,4,0,42,44,3,10,
5,0,43,40,1,0,0,0,43,42,1,0,0,0,44,9,1,0,0,0,45,51,3,12,6,0,46,47,5,5,0,
0,47,48,3,2,1,0,48,49,5,6,0,0,49,51,1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,0,
51,11,1,0,0,0,52,56,5,7,0,0,53,55,3,14,7,0,54,53,1,0,0,0,55,58,1,0,0,0,56,
54,1,0,0,0,56,57,1,0,0,0,57,13,1,0,0,0,58,56,1,0,0,0,59,60,7,0,0,0,60,15,
1,0,0,0,6,22,29,37,43,50,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicaPropParser extends antlr4.Parser {

    static grammarFileName = "LogicaProp.g4";
    static literalNames = [ null, "'->'", null, null, null, "'('", "')'" ];
    static symbolicNames = [ null, "IMPLICA", "OR", "AND", "NOT", "LPAREN", 
                             "RPAREN", "LETTER", "DIGIT", "WS" ];
    static ruleNames = [ "programa", "formula", "disjunction", "conjunction", 
                         "negation", "primary", "variable", "variable_char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogicaPropParser.ruleNames;
        this.literalNames = LogicaPropParser.literalNames;
        this.symbolicNames = LogicaPropParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogicaPropParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.formula();
	        this.state = 17;
	        this.match(LogicaPropParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogicaPropParser.RULE_formula);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.disjunction();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 20;
	            this.match(LogicaPropParser.IMPLICA);
	            this.state = 21;
	            this.formula();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogicaPropParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.conjunction();
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 25;
	            this.match(LogicaPropParser.OR);
	            this.state = 26;
	            this.conjunction();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogicaPropParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.negation();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 33;
	            this.match(LogicaPropParser.AND);
	            this.state = 34;
	            this.negation();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogicaPropParser.RULE_negation);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new NegacionOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(LogicaPropParser.NOT);
	            this.state = 41;
	            this.negation();
	            break;
	        case 5:
	        case 7:
	            localctx = new SinNegacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogicaPropParser.RULE_primary);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            localctx = new VarPrimaryContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.variable();
	            break;
	        case 5:
	            localctx = new ParenPrimaryContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(LogicaPropParser.LPAREN);
	            this.state = 47;
	            this.formula();
	            this.state = 48;
	            this.match(LogicaPropParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LogicaPropParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(LogicaPropParser.LETTER);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===8) {
	            this.state = 53;
	            this.variable_char();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_char() {
	    let localctx = new Variable_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LogicaPropParser.RULE_variable_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogicaPropParser.EOF = antlr4.Token.EOF;
LogicaPropParser.IMPLICA = 1;
LogicaPropParser.OR = 2;
LogicaPropParser.AND = 3;
LogicaPropParser.NOT = 4;
LogicaPropParser.LPAREN = 5;
LogicaPropParser.RPAREN = 6;
LogicaPropParser.LETTER = 7;
LogicaPropParser.DIGIT = 8;
LogicaPropParser.WS = 9;

LogicaPropParser.RULE_programa = 0;
LogicaPropParser.RULE_formula = 1;
LogicaPropParser.RULE_disjunction = 2;
LogicaPropParser.RULE_conjunction = 3;
LogicaPropParser.RULE_negation = 4;
LogicaPropParser.RULE_primary = 5;
LogicaPropParser.RULE_variable = 6;
LogicaPropParser.RULE_variable_char = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_programa;
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	EOF() {
	    return this.getToken(LogicaPropParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_formula;
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	IMPLICA() {
	    return this.getToken(LogicaPropParser.IMPLICA, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_disjunction;
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaPropParser.OR);
	    } else {
	        return this.getToken(LogicaPropParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitDisjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitDisjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_conjunction;
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaPropParser.AND);
	    } else {
	        return this.getToken(LogicaPropParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitConjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitConjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_negation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SinNegacionContext extends NegationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterSinNegacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitSinNegacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitSinNegacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicaPropParser.SinNegacionContext = SinNegacionContext;

class NegacionOpContext extends NegationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(LogicaPropParser.NOT, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterNegacionOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitNegacionOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitNegacionOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicaPropParser.NegacionOpContext = NegacionOpContext;

class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_primary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenPrimaryContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(LogicaPropParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(LogicaPropParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterParenPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitParenPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitParenPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicaPropParser.ParenPrimaryContext = ParenPrimaryContext;

class VarPrimaryContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterVarPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitVarPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitVarPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicaPropParser.VarPrimaryContext = VarPrimaryContext;

class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_variable;
    }

	LETTER() {
	    return this.getToken(LogicaPropParser.LETTER, 0);
	};

	variable_char = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_charContext);
	    } else {
	        return this.getTypedRuleContext(Variable_charContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Variable_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaPropParser.RULE_variable_char;
    }

	LETTER() {
	    return this.getToken(LogicaPropParser.LETTER, 0);
	};

	DIGIT() {
	    return this.getToken(LogicaPropParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.enterVariable_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaPropListener ) {
	        listener.exitVariable_char(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaPropVisitor ) {
	        return visitor.visitVariable_char(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogicaPropParser.ProgramaContext = ProgramaContext; 
LogicaPropParser.FormulaContext = FormulaContext; 
LogicaPropParser.DisjunctionContext = DisjunctionContext; 
LogicaPropParser.ConjunctionContext = ConjunctionContext; 
LogicaPropParser.NegationContext = NegationContext; 
LogicaPropParser.PrimaryContext = PrimaryContext; 
LogicaPropParser.VariableContext = VariableContext; 
LogicaPropParser.Variable_charContext = Variable_charContext; 
