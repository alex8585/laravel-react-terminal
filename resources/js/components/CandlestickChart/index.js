import React from 'react';
import { Chart } from "react-google-charts";
import {connect} from 'react-redux';
import {useEffect} from 'react';

import * as actions from '../../redux/actions/candlestickChartActions.js';
import  config from '../../config.js';
import  Spinner from '../Common/Spinner';


var CandlestickChart  = ({loading, chardData, currentSymbol, fetchChart}) => { 
	let refresh_rate = config('chart.refresh_rate');

    useEffect(() => {
		fetchChart(currentSymbol);
		console.log('useEffect fetchChart1');
        let interval = setInterval(() => {
            fetchChart(currentSymbol);
            console.log('useEffect fetchChart2');
        }, refresh_rate);
        return () => clearInterval(interval);
	},[currentSymbol]); 
	
    
	
	if(loading) {
        return (<Spinner></Spinner>)
	} 
	
	



	if(!chardData.length) return null;

	return ( <div style={{ display: 'flex', maxWidth: 900 }}>
		
		<Chart
			width={'100%'}
			height={350}
			chartType="CandlestickChart"
			loader={ <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
			data={[
				['day', 'a', 'b', 'c', 'd'],
				...chardData
			]}
			options={{
				legend: 'none',
				bar: { groupWidth: '100%' }, // Remove space between bars.
				candlestick: {
				fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
				risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
				},
			}}
			rootProps={{ 'data-testid': '2' }}
		/>
	</div> )
}

const mapStateToProps = (state) => {
    return {
    	loading: state.chart.loading,
		chardData: state.chart.data,
		currentSymbol: state.terminal.currentSymbol,
    }
}



export default connect(mapStateToProps, actions)(CandlestickChart);