function drawBarChart(obj){
    
    //setup
    const data = {
    datasets: [{
        label: 'Test Result',
        data: obj,
        backgroundColor: [
          'rgba(0, 134, 179, 0.2)',
          'rgba(0, 134, 179, 0.2)',
          'rgba(0, 134, 179, 0.2)',
          'rgba(0, 134, 179, 0.2)'
        ],
        borderColor: [
          'rgb(0, 134, 179)',
          'rgb(0, 134, 179)',
          'rgb(0, 134, 179)',
          'rgb(0, 134, 179)'
        ],
        borderWidth: 1
        }]
    };
    // configuration
    const config = {
        type: 'bar',
        data: data,
        options: {
          plugins:{
            legend: {
              display: false
            }
          },
          scales: {
            y: {
                title: {
                    display: true,
                    text: 'score [%]'
                  },
                beginAtZero: true,
                suggestedMax:100,
            }
          }
        },
      };
    //render
    var myChart = new Chart(
        document.getElementById('barChart'),
        config
    )

};