
import { max } from "d3-array";
import { scaleLinear, scalePoint } from  "d3-scale";

import React from "react";
import PropTypes from "prop-types";

import { ChartCanvas, Chart } from "whalestats-stockcharts";
import {
	BarSeries,
} from "whalestats-stockcharts/lib/series";
import { XAxis, YAxis } from "whalestats-stockcharts/lib/axes";
import { fitWidth } from "whalestats-stockcharts/lib/helper";

class HorizontalBarChart extends React.Component {
	render() {
		const { data, type, width, ratio } = this.props;

		return (
			<ChartCanvas ratio={ratio} width={width} height={400}
					margin={{ left: 90, right: 10, top: 20, bottom: 30 }} type={type}
					seriesName="Fruits"
					xExtents={data => [0, max(data, d => d.x)]}
					data={data}
					xScale={scaleLinear()} flipXScale={false}
					useCrossHairStyleCursor={false}>
				<Chart id={1}
						yExtents={data.map(d => d.y)}
						yScale={scalePoint()}
						padding={.5}>
					<XAxis axisAt="bottom" orient="bottom" />
					<YAxis axisAt="left" orient="left" />
					<BarSeries yAccessor={d => d.y} xAccessor={d => d.x} swapScales />
				</Chart>
			</ChartCanvas>
		);
	}
}

HorizontalBarChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

HorizontalBarChart.defaultProps = {
	type: "svg",
};
HorizontalBarChart = fitWidth(HorizontalBarChart);

export default HorizontalBarChart;
