function multiplicationTable(n) {
    let header = "    "; // Отступ для верхнего заголовка
    for (let i = 1; i <= n; i++) {
        header += i.toString().padStart(3) + " "; // Верхняя строка с числами
    }
    console.log(header);

    for (let i = 1; i <= n; i++) {
        let row = i.toString().padStart(3) + " "; // Заголовок строки
        for (let j = 1; j <= n; j++) {
            row += (i * j).toString().padStart(3) + " "; // Таблица умножения
        }
        console.log(row);
    }
}

multiplicationTable(5);