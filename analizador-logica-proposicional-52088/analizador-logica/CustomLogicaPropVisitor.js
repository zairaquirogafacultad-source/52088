import LogicaPropVisitor from './generated/LogicaPropVisitor.js';

/**
 * CustomLogicaPropVisitor
 * Recorre el árbol sintáctico y traduce la fórmula lógica a JavaScript.
 */
export default class CustomLogicaPropVisitor extends LogicaPropVisitor {

  // ── programa: punto de entrada ───────────────────────────────────────
  visitPrograma(ctx) {
    return this.visit(ctx.formula());
  }

  // ── formula: disjunction ( -> formula )? ─────────────────────────────
  visitFormula(ctx) {
    const left = this.visit(ctx.disjunction());
    if (ctx.formula()) {
      const right = this.visit(ctx.formula());
      return `(!${left} || ${right})`;
    }
    return left;
  }

  // ── disjunction: conjunction ( ∨ conjunction )* ───────────────────────
  visitDisjunction(ctx) {
    const partes = ctx.conjunction().map(c => this.visit(c));
    if (partes.length === 1) return partes[0];
    return partes.join(' || ');
  }

  // ── conjunction: negation ( ∧ negation )* ────────────────────────────
  visitConjunction(ctx) {
    const partes = ctx.negation().map(n => this.visit(n));
    if (partes.length === 1) return partes[0];
    return partes.join(' && ');
  }

  // ── negation: ¬ negation ──────────────────────────────────────────────
  visitNegacionOp(ctx) {
    const operando = this.visit(ctx.negation());
    return `!${operando}`;
  }

  // ── negation: primary (sin negación) ─────────────────────────────────
  visitSinNegacion(ctx) {
    return this.visit(ctx.primary());
  }

  // ── primary: variable ─────────────────────────────────────────────────
  visitVarPrimary(ctx) {
    return this.visit(ctx.variable());
  }

  // ── primary: ( formula ) ──────────────────────────────────────────────
  visitParenPrimary(ctx) {
    const inner = this.visit(ctx.formula());
    return `(${inner})`;
  }

  // ── variable: LETTER variable_char* ───────────────────────────────────
  visitVariable(ctx) {
    const nombre = ctx.getText();
    return `context.${nombre}`;
  }
}
