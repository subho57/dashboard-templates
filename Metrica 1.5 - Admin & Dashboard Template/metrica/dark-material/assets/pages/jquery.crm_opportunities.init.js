/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Opportunities Js
 */

 //Apex-radialbar4

var options = {
  chart: {
    height: 180,
    type: 'radialBar',
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      bottom: 0,
      right: 0,
      blur: 2,
      color: '#010f42',
      opacity: 0.15
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "60%",
        background: "#293450"
      },
      track: {
        background: '#394b7b',
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -5,
          color: "#fff",
          fontSize: "13px",
        },
        value: {
            offsetY: 5,
          color: "#ff7d51",
          fontSize: "20px",
          show: true
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ["#cba280"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [75],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Leads Won'],

}

var chart = new ApexCharts(
  document.querySelector("#apex_radialbar4"),
  options
);

chart.render();