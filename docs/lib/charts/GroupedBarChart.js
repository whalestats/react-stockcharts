
import React from "react";
import PropTypes from "prop-types";

import { scaleOrdinal, schemeCategory10, scalePoint } from  "d3-scale";
import { set } from "d3-collection";

import { ChartCanvas, Chart } from "whalestats-stockcharts";
import {
	GroupedBarSeries,
} from "whalestats-stockcharts/lib/series";
import { XAxis, YAxis } from "whalestats-stockcharts/lib/axes";
import { fitWidth } from "whalestats-stockcharts/lib/helper";

class GroupedBarChart extends React.Component {
	render() {
		const { data, type, width, ratio } = this.props;

		const f = scaleOrdinal(schemeCategory10)
			.domain(set(data.map(d => d.region)));

		const fill = (d, i) => f(i);
		return (
			<ChartCanvas ratio={ratio} width={width} height={400}
					margin={{ left: 40, right: 10, top: 20, bottom: 30 }} type={type}
					seriesName="Fruits"
					xExtents={list => list.map(d => d.x)}
					data={data}
					xAccessor={d => d.x} xScale={scalePoint()}
					padding={1}>
				<Chart id={1}
						yExtents={[0, d => [d.y1, d.y2, d.y3, d.y4]]}>
					<XAxis axisAt="bottom" orient="bottom" />
					<YAxis axisAt="left" orient="left" />
					<GroupedBarSeries yAccessor={[d => d.y1, d => d.y2, d => d.y3, d => d.y4]}
							fill={fill}
							spaceBetweenBar={3}/>
				</Chart>
			</ChartCanvas>
		);
	}
}

GroupedBarChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

GroupedBarChart.defaultProps = {
	type: "svg",
};
GroupedBarChart = fitWidth(GroupedBarChart);

export default GroupedBarChart;
