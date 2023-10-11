document.addEventListener('DOMContentLoaded', function() {
    const solveButton = document.getElementById('solveBtn');
    const cleanButton = document.getElementById('cleanBtn');
    const inputCells = document.querySelectorAll('.input-cell');

    solveButton.addEventListener('click', function() {

        // Desactiva las celdas de entrada
        const inputCells = document.querySelectorAll('.input-cell');
        inputCells.forEach(cell => {
            cell.disabled = true;
        });

        // Obtén los valores de las celdas de entrada
        const cell01 = parseFloat(document.getElementById('cell-0-1').value);
        const cell12 = parseFloat(document.getElementById('cell-1-2').value);
        const cell13 = parseFloat(document.getElementById('cell-1-3').value);
        const cell24 = parseFloat(document.getElementById('cell-2-4').value);
        const cell25 = parseFloat(document.getElementById('cell-2-5').value);
        const cell26 = parseFloat(document.getElementById('cell-2-6').value);

        // Verifica si se ingresaron números en las celdas requeridas Posicion1
        if (!isNaN(cell01) && !isNaN(cell24) && !isNaN(cell26)) {
            // Realiza la operación y actualiza .cell-2-5
            const result = ((cell01 - cell24 - cell26) / 2);
            const cell25 = document.getElementById('cell-2-5');
            cell25.value = result;

            // Suma los valores de .cell-2-4 y .cell-2-5 y muestra el resultado en .cell-1-2
            const cell12 = document.getElementById('cell-1-2');
            const total12 = cell24 + result;
            cell12.value = total12;

            // Suma los valores de .cell-2-5 y .cell-2-6 y muestra el resultado en .cell-1-3
            const cell13 = document.getElementById('cell-1-3');
            const total13 = cell26 + result;
            cell13.value = total13;
            } 

        // Verifica si se ingresaron números en las celdas requeridas Posicion 2
        if (!isNaN(cell24) && !isNaN(cell25) && !isNaN(cell26)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell12 = document.getElementById('cell-1-2');
            const result12 = cell24 + cell25;
            cell12.value = result12;

            // Suma los valores de .cell-1-3 y .cell-1-2 y muestra el resultado en .cell-1-3
            const cell13 = document.getElementById('cell-1-3');
            const total13 = cell25 + cell26;
            cell13.value = total13;

            // Suma los valores de .cell-1-2 y .cell-1-3 y muestra el resultado en .cell-0-1
            const cell01 = document.getElementById('cell-0-1');
            const total01 = result12 + total13;
            cell01.value = total01;
            } 


        // Verifica si se ingresaron números en las celdas requeridas Posicion 3
        if (!isNaN(cell24) && !isNaN(cell12) && !isNaN(cell01)) {
            // Realiza la operación y actualiza .cell-1-3            
            const cell13 = document.getElementById('cell-1-3');
            const result13 = cell01 - cell12;
            cell13.value = result13;

            // Resta los valores de .cell-1-2 y .cell-2-4 y muestra el resultado en .cell-2-5
            const cell25 = document.getElementById('cell-2-5');
            const total25 = cell12 - cell24;
            cell25.value = total25;

            // Resta los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-6
            const cell26 = document.getElementById('cell-2-6');
            const total26 = result13 - total25;
            cell26.value = total26;
            } 

            // Verifica si se ingresaron números en las celdas requeridas Posicion 4
        if (!isNaN(cell26) && !isNaN(cell13) && !isNaN(cell01)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell12 = document.getElementById('cell-1-2');
            const result12 = cell01 - cell13;
            cell12.value = result12;

            // Se restan los valores de .cell-1-3 y .cell-2-6 y muestra el resultado en .cell-2-5
            const cell25 = document.getElementById('cell-2-5');
            const total25 = cell13 - cell26;
            cell25.value = total25;

            // Se Restan los valores de .cell-1-2 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell24 = document.getElementById('cell-2-4');
            const total24 = result12 - total25;
            cell24.value = total24;
            }
            
            // Verifica si se ingresaron números en las celdas requeridas Posicion 5
        if (!isNaN(cell26) && !isNaN(cell12) && !isNaN(cell01)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell13 = document.getElementById('cell-1-3');
            const result13 = cell01 - cell12;
            cell13.value = result13;

            // Se restan los valores de .cell-1-3 y .cell-2-6 y muestra el resultado en .cell-2-5
            const cell25 = document.getElementById('cell-2-5');
            const total25 = result13 - cell26;
            cell25.value = total25;

            // Se Restan los valores de .cell-1-2 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell24 = document.getElementById('cell-2-4');
            const total24 = cell12 - total25;
            cell24.value = total24;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 6
        if (!isNaN(cell24) && !isNaN(cell13) && !isNaN(cell01)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell12 = document.getElementById('cell-1-2');
            const result12 = cell01 - cell13;
            cell12.value = result12;

            // Se restan los valores de .cell-1-2 y .cell-2-4 y muestra el resultado en .cell-2-5
            const cell25 = document.getElementById('cell-2-5');
            const total25 = result12 - cell24;
            cell25.value = total25;

            // Se Restan los valores de .cell-1-2 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell26 = document.getElementById('cell-2-6');
            const total26 = cell13 - total25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 7
        if (!isNaN(cell01) && !isNaN(cell12) && !isNaN(cell25)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell13 = document.getElementById('cell-1-3');
            const result13 = cell01 - cell12;
            cell13.value = result13;

            // Se restan los valores de .cell-1-2 y .cell-2-4 y muestra el resultado en .cell-2-5
            const cell24 = document.getElementById('cell-2-4');
            const total24 = cell12 - cell25;
            cell24.value = total24;

            // Se Restan los valores de .cell-1-2 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell26 = document.getElementById('cell-2-6');
            const total26 = result13 - cell25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 8
        if (!isNaN(cell01) && !isNaN(cell13) && !isNaN(cell25)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell12 = document.getElementById('cell-1-2');
            const result12 = cell01 - cell13;
            cell12.value = result12;

            // Se restan los valores de .cell-1-2 y .cell-2-5 y muestra el resultado en .cell-2-5
            const cell24 = document.getElementById('cell-2-4');
            const total24 = result12 - cell25;
            cell24.value = total24;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell26 = document.getElementById('cell-2-6');
            const total26 = cell13 - cell25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 9
        if (!isNaN(cell01) && !isNaN(cell12) && !isNaN(cell13)&&(cell12>=cell13)&&(cell01==cell12+cell13)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell25 = document.getElementById('cell-2-5');
            const result25 = cell12 - cell13;
            cell25.value = result25;

            // Se restan los valores de .cell-1-2 y .cell-2-5 y muestra el resultado en .cell-2-5
            const cell24 = document.getElementById('cell-2-4');
            const total24 = cell12 - result25;
            cell24.value = total24;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell26 = document.getElementById('cell-2-6');
            const total26 = cell13 - result25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 10
        if (!isNaN(cell01) && !isNaN(cell12) && !isNaN(cell13)&&(cell12<cell13)&&(cell01==cell12+cell13)) {
            // Realiza la operación y actualiza .cell-2-5            
            const cell25 = document.getElementById('cell-2-5');
            const result25 = cell13 - cell12;
            cell25.value = result25;

            // Se restan los valores de .cell-1-2 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell24 = document.getElementById('cell-2-4');
            const total24 = cell12 - result25;
            cell24.value = total24;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell26 = document.getElementById('cell-2-6');
            const total26 = cell13 - result25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 11
        if (!isNaN(cell24) && !isNaN(cell12) && !isNaN(cell13)) {
            // Realiza la operación y actualiza .cell-0-1            
            const cell01 = document.getElementById('cell-0-1');
            const result01 = cell12 + cell13;
            cell01.value = result01;

            // Se restan los valores de .cell-1-2 y .cell-2-4 y muestra el resultado en .cell-2-5
            const cell25 = document.getElementById('cell-2-5');
            const total25 = cell12 - cell24;
            cell25.value = total25;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell26 = document.getElementById('cell-2-6');
            const total26 = cell13 - total25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 12
        if (!isNaN(cell12) && !isNaN(cell13) && !isNaN(cell26)) {
            // Realiza la operación y actualiza .cell-0-1            
            const cell01 = document.getElementById('cell-0-1');
            const result01 = cell12 + cell13;
            cell01.value = result01;

            // Se restan los valores de .cell-1-3 y .cell-2-6 y muestra el resultado en .cell-2-5
            const cell25 = document.getElementById('cell-2-5');
            const total25 = cell13 - cell26;
            cell25.value = total25;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell24 = document.getElementById('cell-2-4');
            const total24 = cell12 - total25;
            cell24.value = total24;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 13
        if (!isNaN(cell01) && !isNaN(cell25) && !isNaN(cell26)) {
            // Realiza la operación y actualiza .cell-1-3            
            const cell13 = document.getElementById('cell-1-3');
            const result13 = cell25 + cell26;
            cell13.value = result13;

            // Se restan los valores de .cell-0-1 y .cell-1-3 y muestra el resultado en .cell-1-2
            const cell12 = document.getElementById('cell-1-2');
            const total12 = cell01 - result13;
            cell12.value = total12;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-4
            const cell24 = document.getElementById('cell-2-4');
            const total24 = total12 - cell25;
            cell24.value = total24;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 14
        if (!isNaN(cell01) && !isNaN(cell24) && !isNaN(cell25)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell12 = document.getElementById('cell-1-2');
            const result12 = cell24 + cell25;
            cell12.value = result12;

            // Se restan los valores de .cell-0-1 y .cell-1-2 y muestra el resultado en .cell-1-3
            const cell13 = document.getElementById('cell-1-3');
            const total13 = cell01 - result12;
            cell13.value = total13;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-6
            const cell26 = document.getElementById('cell-2-6');
            const total26 = total13 - cell25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 15
        if (!isNaN(cell24) && !isNaN(cell25) && !isNaN(cell13)) {
            // Realiza la operación y actualiza .cell-1-2            
            const cell12 = document.getElementById('cell-1-2');
            const result12 = cell24 + cell25;
            cell12.value = result12;

            // Se restan los valores de .cell-0-1 y .cell-1-2 y muestra el resultado en .cell-0-1
            const cell01 = document.getElementById('cell-0-1');
            const total01 = cell13 + result12;
            cell01.value = total01;

            // Se Restan los valores de .cell-1-3 y .cell-2-5 y muestra el resultado en .cell-2-6
            const cell26 = document.getElementById('cell-2-6');
            const total26 = cell13 - cell25;
            cell26.value = total26;
            }

            // Verifica si se ingresaron números en las celdas requeridas Posicion 15
        if (!isNaN(cell12) && !isNaN(cell25) && !isNaN(cell26)) {
            // Realiza la operación y actualiza .cell-2-4           
            const cell24 = document.getElementById('cell-2-4');
            const result24 = cell12 - cell25;
            cell24.value = result24;

            // Se suman los valores de .cell-2-5 y .cell-3-6 y muestra el resultado en .cell-1-3
            const cell13 = document.getElementById('cell-1-3');
            const total13 = cell25 + cell26;
            cell13.value = total13;

            // Se suman los valores de .cell-1-3 y .cell-1-2 y muestra el resultado en .cell-0-1
            const cell01 = document.getElementById('cell-0-1');
            const total01 = total13 + cell12;
            cell01.value = total01;
            }
    
    
    });
    cleanButton.addEventListener('click', function() {
        // Habilita las celdas de entrada y limpia su contenido
        inputCells.forEach(cell => {
            cell.disabled = false;
            cell.value = '';
        });
    });
});





