document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var instance = M.Sidenav.getInstance(elems);
    instance.open();
    instance.close();
  });

AmCharts.makeChart('chartdiv1', {
  type: 'serial',
  theme: 'dark' ,
  categoryField: 'category',
  startDuration: 1,
  categoryAxis: {
    gridPosition: 'start',
  },
  trendLines: [],
  graphs: [
    {
      balloonText: '[[title]] of [[category]]:[[value]]',
      bullet: 'round',
      id: 'AmGraph-1',
      title: 'graph 1',
      valueField: 'column-1',
    },
    {
      balloonText: '[[title]] of [[category]]:[[value]]',
      bullet: 'square',
      id: 'AmGraph-2',
      title: 'graph 2',
      valueField: 'column-2',
    },
  ],
  guides: [],
  valueAxes: [
    {
      id: 'ValueAxis-1'
    },
  ],
  allLabels: [],
  balloon: {},
  dataProvider: [
    {
      category: 'M',
      'column-2': 14,
    },
    {
      category: 'T',
      'column-2': 20,
    },
    {
      category: 'W',
      'column-2': 12,
    },
    {
      category: 'T',
      'column-2': 18,
    },
    {
      category: 'F',
      'column-2': 22,
    },
    {
      category: 'S',
      'column-2': 9,
    },
    {
      category: 'S',
      'column-2': 35,
    },
  ],
})

AmCharts.makeChart('chartdiv2', {
  type: 'serial',
  theme: 'dark',
  categoryField: 'category',
  startDuration: 1,
  categoryAxis: {
    gridPosition: 'start',
  },
  trendLines: [],
  graphs: [
    {
      balloonText: '[[title]] of [[category]]:[[value]]',
      fillAlphas: 1,
      id: 'AmGraph-1',
      title: 'graph 1',
      type: 'column',
      valueField: 'column-1',
    },
    {
      balloonText: '[[title]] of [[category]]:[[value]]',
      fillAlphas: 1,
      id: 'AmGraph-2',
      title: 'graph 2',
      type: 'column',
      valueField: 'column-2',
    },
  ],
  guides: [],
  valueAxes: [
    {
      id: 'ValueAxis-1',
    },
  ],
  allLabels: [],
  balloon: {},
  dataProvider: [
    {
      category: 'J',
      'column-1': "425",
    },
    {
      category: 'F',
      'column-1': '350',
    },
    {
      category: 'M',
      'column-1': '180',
    },
    {
      category: 'A',
      'column-1': '640',
    },
    {
      category: 'M',
      'column-1': '430',
    },
    {
      category: 'J',
      'column-1': '310',
    },
    {
      category: 'J',
      'column-1': '210',
    },
    {
      category: 'A',
      'column-1': '300',
    },
    {
      category: 'S',
      'column-1': '420',
    },
    {
      category: 'O',
      'column-1': '500',
    },
    {
      category: 'N',
      'column-1': '580',
    },
    {
      category: 'D',
      'column-1': '710',
    },
  ],
})

AmCharts.makeChart('chartdiv3', {
  type: 'serial',
  theme: 'dark' ,
  categoryField: 'category',
  startDuration: 1,
  categoryAxis: {
    gridPosition: 'start',
  },
  trendLines: [],
  graphs: [
    {
      balloonText: '[[title]] of [[category]]:[[value]]',
      bullet: 'round',
      id: 'AmGraph-1',
      title: 'graph 1',
      valueField: 'column-1',
    },
    {
      balloonText: '[[title]] of [[category]]:[[value]]',
      bullet: 'square',
      id: 'AmGraph-2',
      title: 'graph 2',
      valueField: 'column-2',
    },
  ],
  guides: [],
  valueAxes: [
    {
      id: 'ValueAxis-1',
    },
  ],
  allLabels: [],
  balloon: {},
  dataProvider: [
    {
      category: '12p',
      'column-2': 105,
    },
    {
      category: '3p',
      'column-2': 600,
    },
    {
      category: '6p',
      'column-2': 305,
    },
    {
      category: '9p',
      'column-2': 170,
    },
    {
      category: '12p',
      'column-2': 150,
    },
    {
      category: '3a',
      'column-2': 130,
    },
    {
      category: '6a',
      'column-2': 110,
    },
    {
      category: '9a',
      'column-2': 100,
    }
  ],
})
