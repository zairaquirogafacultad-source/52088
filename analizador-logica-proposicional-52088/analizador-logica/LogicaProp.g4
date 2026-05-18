grammar LogicaProp;

// Regla principal (axioma) - punto de entrada
programa        : formula EOF ;

// Implicación (derecha-asociativa)
formula         : disjunction ( IMPLICA formula )? ;

// Disyunción
disjunction     : conjunction ( OR conjunction )* ;

// Conjunción
conjunction     : negation ( AND negation )* ;

// Negación (unaria, prefija)
negation        : NOT negation  #negacionOp
                | primary       #sinNegacion ;

// Primario: variable o fórmula entre paréntesis
primary         : variable                  #varPrimary
                | LPAREN formula RPAREN     #parenPrimary ;

// Variable: letra seguida de letras o dígitos
variable        : LETTER variable_char* ;

variable_char   : LETTER
                | DIGIT ;

// ── Tokens ────────────────────────────────────────────────────────────────

IMPLICA         : '->' ;

OR              : '\u2228' | '\\/' | '|' ;
AND             : '\u2227' | '/\\' | '&' ;
NOT             : '\u00AC' | '~' | '!' ;

LPAREN          : '(' ;
RPAREN          : ')' ;

LETTER          : [a-zA-Z] ;
DIGIT           : [0-9] ;

WS              : [ \t\r\n]+ -> skip ;
