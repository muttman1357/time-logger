import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'tl-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, AfterViewInit {
private dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

  ngOnInit() {
    d3.select('h3').style('color', 'red')
      .attr('class', 'heading')
      .text('Updated Tag Name');


    let svgWidth = 500, svgHeight = 300, barPadding = 5;
    let barWidth = (svgWidth / this.dataset.length);

    let svg = d3.select("svg")
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    let barChart = svg.selectAll('rect')
      .data(this.dataset)
      .enter()
      .append('rect')
      .attr('y', d => svgHeight - d)
      .attr('height', d => d)
      .attr('width', barWidth - barPadding)
      .attr('transform', (d, i) => {
        let translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
      });
  }


  ngAfterViewInit() {
  }

}
