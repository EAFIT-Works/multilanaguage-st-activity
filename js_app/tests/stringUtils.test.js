// TODO: Escribe pruebas unitarias para isPalindrome.
// Sugerencias: "radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true

const { isPalindrome } = require("../src/stringUtils");

test("radar_es_palindromo", () => {
  expect(isPalindrome("radar")).toBe(true);
});

test("anita_lava_la_tina_es_palindromo", () => {
  expect(isPalindrome("anita lava la tina")).toBe(true);
});

test("python_no_es_palindromo", () => {
  expect(isPalindrome("python")).toBe(false);
});

test("cadena_vacia_es_palindromo", () => {
  expect(isPalindrome("")).toBe(false);
});

test("radar_mayuscula_es_palindromo", () => {
  expect(isPalindrome("Radar")).toBe(true);
});
