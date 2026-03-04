import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/stringUtils";

// TODO: completa los casos: "radar"->true, "anita lava la tina"->true, "python"->false, ""->true, "Radar"->true

describe("isPalindrome", () => {
  it("radar_es_palindromo", () => {
    expect(isPalindrome("radar")).toBe(true);
  });

  it("anita_lava_la_tina_es_palindromo", () => {
    expect(isPalindrome("anita lava la tina")).toBe(true);
  });

  it("anita_lava_la_tina_mayusculas_espacios_es_palindromo", () => {
    expect(isPalindrome("aNi   ta laVa la Tina")).toBe(true);
  });

  it("python_no_es_palindromo", () => {
    expect(isPalindrome("python")).toBe(false);
  });

  it("python_mayusculas_espacios_no_es_palindromo", () => {
    expect(isPalindrome("pY thO       n")).toBe(false);
  });

  it("cadena_vacia_es_palindromo", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("radar_mayuscula_es_palindromo", () => {
    expect(isPalindrome("Radar")).toBe(true);
  });
});
