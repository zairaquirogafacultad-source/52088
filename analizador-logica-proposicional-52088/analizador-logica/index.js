import fs from 'fs';
import antlr4 from 'antlr4';
import LogicaPropLexer from './generated/LogicaPropLexer.js';
import LogicaPropParser from './generated/LogicaPropParser.js';
import CustomLogicaPropVisitor from './CustomLogicaPropVisitor.js';

// ─────────────────────────────────────────────────────────────────────────────
// 1. LECTURA DE LA ENTRADA
// ─────────────────────────────────────────────────────────────────────────────
const input = fs.readFileSync('input.txt', 'utf8').trim();

console.log('═══════════════════════════════════════════════════');
console.log('   ANALIZADOR DE LÓGICA PROPOSICIONAL - ANTLR4     ');
console.log('═══════════════════════════════════════════════════');
console.log(`\n📄 Entrada: ${input}\n`);

// ─────────────────────────────────────────────────────────────────────────────
// 2. ANÁLISIS LÉXICO  →  TABLA DE LEXEMAS-TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const charsForLexer = new antlr4.InputStream(input);
const lexerForTokens = new LogicaPropLexer(charsForLexer);

// Capturar errores léxicos
const lexErrors = [];
lexerForTokens.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    lexErrors.push(`Línea ${line}:${column} → ${msg}`);
  }
});

const allTokens = lexerForTokens.getAllTokens();

// Nombres simbólicos del lexer
const symbolicNames = LogicaPropLexer.symbolicNames;

console.log('───────────────────────────────────────────────────');
console.log('  TABLA DE LEXEMAS Y TOKENS');
console.log('───────────────────────────────────────────────────');
console.log(` ${'#'.padEnd(4)} ${'LEXEMA'.padEnd(15)} ${'TOKEN'.padEnd(15)} ${'LÍNEA'.padEnd(6)} COLUMNA`);
console.log(' ' + '─'.repeat(55));

allTokens
  .filter(t => t.type !== antlr4.Token.EOF)
  .forEach((t, i) => {
    const tokenName = symbolicNames[t.type] ?? `T_${t.type}`;
    const lexema    = t.text.padEnd(15);
    const token     = tokenName.padEnd(15);
    const linea     = String(t.line).padEnd(6);
    const col       = t.column;
    console.log(` ${String(i + 1).padEnd(4)} ${lexema} ${token} ${linea} ${col}`);
  });

if (lexErrors.length > 0) {
  console.log('\n❌ Errores léxicos detectados:');
  lexErrors.forEach(e => console.log('   ' + e));
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. ANÁLISIS SINTÁCTICO  →  ÁRBOL + ERRORES
// ─────────────────────────────────────────────────────────────────────────────
const chars  = new antlr4.InputStream(input);
const lexer  = new LogicaPropLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new LogicaPropParser(tokens);
parser.buildParseTrees = true;

// Capturar errores sintácticos
const syntaxErrors = [];
parser.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    syntaxErrors.push(`Línea ${line}:${column} → ${msg}`);
  }
});

const tree = parser.programa();

console.log('\n───────────────────────────────────────────────────');
console.log('  ANÁLISIS LÉXICO Y SINTÁCTICO');
console.log('───────────────────────────────────────────────────');

if (syntaxErrors.length > 0 || lexErrors.length > 0) {
  console.log('❌ La entrada contiene errores:\n');
  [...lexErrors, ...syntaxErrors].forEach(e => console.log('   ' + e));
  process.exit(1);
} else {
  console.log('✅ Entrada válida. Sin errores léxicos ni sintácticos.\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. ÁRBOL DE ANÁLISIS SINTÁCTICO (texto)
// ─────────────────────────────────────────────────────────────────────────────
console.log('───────────────────────────────────────────────────');
console.log('  ÁRBOL DE ANÁLISIS SINTÁCTICO (formato texto)');
console.log('───────────────────────────────────────────────────');
const cadenaArbol = tree.toStringTree(parser.ruleNames);
console.log(cadenaArbol);

// ─────────────────────────────────────────────────────────────────────────────
// 5. TRADUCCIÓN A JAVASCRIPT
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n───────────────────────────────────────────────────');
console.log('  TRADUCCIÓN A JAVASCRIPT');
console.log('───────────────────────────────────────────────────');

const visitor     = new CustomLogicaPropVisitor();
const traduccion  = visitor.visit(tree);
const jsCode      = `const result = ${traduccion};\nconsole.log(result);`;

console.log(jsCode);

// ─────────────────────────────────────────────────────────────────────────────
// 6. INTERPRETACIÓN (EJECUCIÓN)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n───────────────────────────────────────────────────');
console.log('  INTERPRETACIÓN (RESULTADO)');
console.log('───────────────────────────────────────────────────');

// Extraer nombres de variables del código generado
const varNames = [...new Set([...traduccion.matchAll(/context\.([a-zA-Z][a-zA-Z0-9]*)/g)].map(m => m[1]))];

console.log(`Variables detectadas: ${varNames.join(', ')}`);
console.log('Asignando true a cada variable para evaluar...\n');

// Construir contexto con todas las variables en true
const context = {};
varNames.forEach(v => { context[v] = true; });

// Evaluar con Function para simular un intérprete básico
try {
  const evalFn  = new Function('context', `return ${traduccion};`);
  const result  = evalFn(context);
  console.log(`Contexto: { ${varNames.map(v => `${v}: true`).join(', ')} }`);
  console.log(`Resultado: ${result} // ${result ? 'true' : 'false'}`);
} catch (e) {
  console.log('Error al evaluar: ' + e.message);
}

console.log('\n═══════════════════════════════════════════════════\n');
