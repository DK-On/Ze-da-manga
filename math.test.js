const { somar, subtrair, multiplicar, dividir, ePositivo } = require('./math');

test('Somar 2 + 2 deve ser 4', () => { expect(somar(2, 2)).toBe(4); });
test('Subtrair 5 - 2 deve ser 3', () => { expect(subtrair(5, 2)).toBe(3); });
test('Multiplicar 3 * 3 deve ser 9', () => { expect(multiplicar(3, 3)).toBe(9); });
test('Dividir 10 por 2 deve ser 5', () => { expect(dividir(10, 2)).toBe(5); });
test('Verificar se 7 é positivo', () => { expect(ePositivo(7)).toBe(true); });
