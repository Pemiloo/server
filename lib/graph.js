const randomData = (leng = 0) => {return Math.round(Math.random() * leng);}

const generateColor = () => {
  return `rgb(${randomData(255)}, ${randomData(255)}, ${randomData(255)})`;
}

const oneDataSet = (data = []) => {  
  return [{  
    label: "Candidate",
    fill: false,
    lineTension: 0.3,
    backgroundColor: generateColor(),
    borderColor: generateColor(),
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: generateColor(),
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: generateColor(),
    pointHoverBorderColor: generateColor(),
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: data
  }];
}


export const generateGraph = (listLabel = [], data = []) => {
  //console.log(listLabel);
  //console.log(data);
  if(listLabel.length === data.length){
    const res = {    
      labels : listLabel,
      datasets : oneDataSet(data)
    }
    //console.log(res)
    return res;
  }
  else return {};
}

// const dataGrap = {
//   labels: [['June', '2015'], 'July', 'August', 'September', 'October', 'November', 'December', ['January', '2016'], 'February', 'March', 'April', 'May'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.3,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//           generateData(),
//       ]
//     },
//     {
//       label: 'My Second dataset',
//       fill: false,
//       lineTension: 0.3,
//       backgroundColor: 'rgb(192,75,186)',
//       borderColor: 'rgb(171,75,192)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgb(180,75,192)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//         generateData(),
//       ]
//     }
//   ]
// };
