
# TODO: Escribe pruebas unitarias para es_palindromo y suma.
# Sugerencias:
# - "radar" -> True, "anita lava la tina" -> True, "python" -> False, "" -> True, "Radar" -> True
# - suma(2,3) -> 5; suma(0,5) -> 5; suma(-2,3) -> 1

from palindromo import es_palindromo
from utils import suma

# Test para la función palindromo

def test_palindromo_radar_true():
    assert es_palindromo("radar") == True

def test_palindromo_anita_true():
    assert es_palindromo("anita lava la tina") == True

def test_palindromo_python_false():
    assert es_palindromo("python") == False

def test_palindromo_radar_mayuscula_true():
    assert es_palindromo("Radar") == True  

