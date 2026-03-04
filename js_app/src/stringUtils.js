
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
function isPalindrome(string) {
  const cleaned = string.toLowerCase().replace(/\s+/g, '');
  if (cleaned === cleaned.split('').reverse().join('')) {
    return true;
  }
  return false;
}

module.exports = { isPalindrome };
