                    var ctx = document.getElementById("myChart").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ["Work", "Play", "Dedication", "Quality"],
                            datasets: [{
                                label: 'Amount of effort involved',
                                data: [7, 3, 10, 12],
                                backgroundColor: [
                                    'rgba(255, 123, 0, 0.7)',
                                    'rgba(54, 162, 235, 0.7)',
                                    'rgba(119, 213, 84, 0.7)',
                                    'rgba(165, 46, 99, 0.7)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(153, 102, 255, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            }
                        }
                    });
