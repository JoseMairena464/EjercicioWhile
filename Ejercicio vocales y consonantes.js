/*UN PROGRAMA QUE PIDA AL USUARIO INGRESAR UNA LETRA DEL ALFABETO Y DETERMINE SI ES UNA VOCAL O UNA CONSONANTE.*/
const letra = prompt('Ingrese una letra').toLowerCase();

switch (letra) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
        alert('Es una vocal.');
        break;
    default:
        alert('Es una consonante.');
        break;
}