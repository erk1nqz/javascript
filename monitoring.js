let canvasElement = document.getElementById("orderChart");

let config = {
    type: "bar",
    data: {
        labels: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        datasets: [{ label: "Сколько было заказов",
        data: [14, 25, 19, 12, 23, 34, 46],
        backgroundColor: ["rgba(38, 166, 91, 1)"],
        borderColor: ["rgba(38, 166, 91, 1)"],
        borderWidth: 0
    }]
    }
}

let orderChart = new Chart(canvasElement, config);