from utils import suma
# Test para la función suma

def test_suma_2_3():
    assert suma(2, 3) == 5

def test_suma_0_5():
    assert suma(0, 5) == 5

def test_suma_negativo_2_3():
    assert suma(-2, 3) == 1
