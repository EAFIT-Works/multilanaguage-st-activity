
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
export function isPalindrome(string: string): boolean {
  const cleaned = string.toLowerCase().replace(/\s+/g, '');
  if (cleaned === cleaned.split('').reverse().join('')) {
    return true;
  }
  return false;
}
