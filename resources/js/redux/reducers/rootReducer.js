import {combineReducers} from 'redux';
import {bookReducer} from './bookReducer';
import {terminalReducer} from './terminalReducer';
import {statisticsReduser} from './statisticsReduser';
import {symbolseReduser} from './symbolseReduser';
import {сandlestickChartReduser} from './сandlestickChartReduser';
import {buyFormReduser} from './buyFormReduser';

export const rootReducer = combineReducers(
    {
        book:bookReducer,
        terminal:terminalReducer,
        stats:statisticsReduser,
        symbols:symbolseReduser,
        chart:сandlestickChartReduser,
        buy_form:buyFormReduser,
    }
)