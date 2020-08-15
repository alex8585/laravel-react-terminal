import React from 'react';
import { Chart } from "react-google-charts";
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import * as chart from '../../redux/actions/candlestickChartActions.js';

export default () => { 

	const dispatch = useDispatch();
    const loading = useSelector(state => state.chart.loading);
	const chardData = useSelector(state => state.chart.data);
	const currentSymbol = useSelector(state => state.terminal.currentSymbol);

	useEffect(() => {
        console.log('useEffect fetchChart1');
        dispatch(chart.fetchChart(currentSymbol));
    },[currentSymbol])
    
    useEffect(() => {
        let interval = setTimeout(() => {
            dispatch(chart.fetchChart(currentSymbol));
            console.log('useEffect fetchChart2');
        }, 60000);
        return () => clearTimeout(interval);
	},[chardData]); 
	
    
	
	if(loading) {
        return(
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
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
