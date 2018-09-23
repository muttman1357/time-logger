import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from "d3";
import 'd3-selection-multi';

@Component({
  selector: 'tl-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  private ds: object[];
  private salesTotal = 0;
  private salesAvg = 0;
  private metrics = [];


  ngOnInit() {

    d3.json('https://api.github.com/repos/muttman1357/d3js-resources/contents/monthlySalesbyCategoryMultiple.json')
      .then(data => {
        let content = this.decodeBase64(data.content);
        console.log(content);
        this.ds = content.contents;
        debugger;

        this.ds.forEach(d => {
          this.buildLine(d['monthlySales']);
          this.showTotals(d['monthlySales']);
        });


      });


  }

  decodeBase64(d) {
    return JSON.parse(window.atob(d));
  }

  buildLine(ds) {

    let page = d3.select('tl-reports'),
      w = 400,
      h = 100,
      padding = 2,
      svg = page.append('svg').attr('width', w).attr('height', h);
    // scale = d3.scaleLinear().domain([0, Math.max(...dataset)]).range([0, h - 15]);

    // LineGraph
    let lineFun = d3.line()
      .x(d => (d.month-20130001)/3.25)
      .y(d => h - d.sales)
      .curve(d3.curveLinear);

    let viz = svg.append("path")
      .attrs({
        d: lineFun(ds),
        "stroke": "purple",
        "stroke-width": 2,
        "fill": "none"
      });
  }

  showTotals(ds) {
    let t = d3.select('tl-reports').append('table');
      ds.forEach(ob => {
        this.salesTotal += parseInt(ob['sales'], 10);
      });

      this.salesAvg = this.salesTotal / ds.length;

      // add metrics to array
      this.metrics.push('Sales Total: ' + this.salesTotal);
      this.metrics.push('Sales Average: ' + this.salesAvg.toFixed(2));

      let tr = t.selectAll('table')
        .data(this.metrics)
        .enter()
        .append('tr')
        .append('td')
        .text(d => d);
  }

  //labels
  // let lables = svg.selectAll('text')
  //   .data(this.ds)
  //   .enter()
  //   .append('text')
  //   .text(d => d.sales)
  //   .attr('x', d => d.month * 2)
  //   .attr('y', d => d.sales + 10);


    // Barchart
  //   svg.selectAll('rect')
  //     .data(dataset)
  //     .enter()
  //     .append('rect')
  //     .attrs({
  //       x: (d, i) => i * (w/dataset.length),
  //       y: (d) => h - scale(d),
  //       width: (w/dataset.length) - padding,
  //       height: (d) => scale(d),
  //       fill: d => this.colorpicker(d)
  //     });
  //
  //   svg.selectAll('text')
  //     .data(dataset)
  //     .enter()
  //     .append('text')
  //     .text(d => d)
  //     .attrs({
  //       'text-anchor': "middle",
  //       x: (d, i) => i * (w/dataset.length) + (w/dataset.length - padding) / 2,
  //       y: d => (h - 1) - scale(d)
  //     });
  // }
  //
  //
  //
  // colorpicker(v) {
  //   return v <= 20 ? '#666666' : '#FF0033';
  // }

}
