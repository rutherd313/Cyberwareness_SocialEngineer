function drawDoughnutChart(array){
    var label = (locale == "de") ? ['korrekt', 'falsch'] : ['correct', 'incorrect'];
    //setup
    const data = {
        labels: label,
        datasets: [{
            label: 'Test Result',
            data: array,
            backgroundColor: [
            'rgba(0, 134, 179, 0.2)',
            'rgba(224, 106, 89, 0.2)',
            ],
            hoverOffset: 4,
            borderColor: [
                'rgb(0, 134, 179)',
                'rgb(224, 106, 89)',
            ],
            borderWidth: 1
        }]
        };
    // configuration
    const config = {
        type: 'doughnut',
        data: data,
    };
    //render
    var myChart = new Chart(
        document.getElementById('doughnutChart'),
        config
    )

};