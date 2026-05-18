# Analizador de Lógica Proposicional

Proyecto construido con **ANTLR4** y **JavaScript (Node.js)** para la asignatura  
*Sintaxis y Semántica de Lenguajes de Programación – FRM UTN*.

Analiza fórmulas de lógica proposicional, genera la tabla de tokens, el árbol  
sintáctico, traduce la fórmula a JavaScript y la evalúa.

---

## Gramática soportada

```
formula      = disjunction [ "→" formula ]
disjunction  = conjunction { "∨" conjunction }
conjunction  = negation { "∧" negation }
negation     = "¬" negation | primary
primary      = variable | "(" formula ")"
variable     = letter { letter | digit }
```

### Operadores reconocidos

| Operador | Símbolos aceptados |
|----------|--------------------|
| Implicación `→` | `->` |
| Disyunción `∨`  | `\/` o `|` |
| Conjunción `∧`  | `/\` o `&` |
| Negación `¬`    | `~` o `!`  |

---

## Requisitos previos

- **Java 1.8+** (para ANTLR)
- **Node.js 16+**
- **Visual Studio Code** (recomendado)

Verificar instalaciones:
```bash
node -v
npm -v
java -version
```

---

## Estructura del proyecto

```
analizador-logica-proposicional/
├── LogicaProp.g4              # Gramática ANTLR4
├── index.js                   # Programa principal
├── CustomLogicaPropVisitor.js # Visitor con semántica y traducción
├── input.txt                  # Entrada actual
├── package.json
├── antlr-4.13.2-complete.jar
├── generated/                 # Archivos autogenerados por ANTLR
│   ├── LogicaPropLexer.js
│   ├── LogicaPropParser.js
│   ├── LogicaPropVisitor.js
│   └── LogicaPropListener.js
├── InputsTest/
│   ├── EntradasValidas.txt
│   └── EntradasNoValidas.txt
└── .vscode/
    ├── settings.json
    └── launch.json
```

---

## Cómo ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/TU_LEGAJO.git
cd TU_LEGAJO
code .
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Escribir la fórmula en `input.txt`

Ejemplo:
```
(p \/ q) /\ ~r -> s
```

### 4. Ejecutar

```bash
npm start
```

o directamente:

```bash
node index.js
```

---

## Ejemplo de salida

Con `input.txt` conteniendo `(p \/ q) /\ ~r -> s`:

```
═══════════════════════════════════════════════════
   ANALIZADOR DE LÓGICA PROPOSICIONAL - ANTLR4
═══════════════════════════════════════════════════

📄 Entrada: (p \/ q) /\ ~r -> s

───────────────────────────────────────────────────
  TABLA DE LEXEMAS Y TOKENS
───────────────────────────────────────────────────
 #    LEXEMA          TOKEN           LÍNEA  COLUMNA
 ─────────────────────────────────────────────────────
 1    (               LPAREN          1      0
 2    p               LETTER          1      1
 3    \/              OR              1      3
 ...

───────────────────────────────────────────────────
  ANÁLISIS LÉXICO Y SINTÁCTICO
───────────────────────────────────────────────────
✅ Entrada válida. Sin errores léxicos ni sintácticos.

───────────────────────────────────────────────────
  ÁRBOL DE ANÁLISIS SINTÁCTICO (formato texto)
───────────────────────────────────────────────────
(programa (formula (disjunction ...) -> ...) <EOF>)

───────────────────────────────────────────────────
  TRADUCCIÓN A JAVASCRIPT
───────────────────────────────────────────────────
const result = (!(context.p || context.q) && !context.r || context.s);
console.log(result);

───────────────────────────────────────────────────
  INTERPRETACIÓN (RESULTADO)
───────────────────────────────────────────────────
Variables detectadas: p, q, r, s
Contexto: { p: true, q: true, r: true, s: true }
Resultado: true // true
```

---

## Regenerar el Lexer y Parser (si se modifica la gramática)

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -listener -o generated LogicaProp.g4
```

> ⚠️ No modificar los archivos dentro de `generated/` directamente.  
> Toda la semántica personalizada va en `CustomLogicaPropVisitor.js`.
