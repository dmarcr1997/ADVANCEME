import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { connect } from 'react-redux';

class Graph extends PureComponent{
    getData(){
        const dates = this.props.trainDates.map(tDate => {
            return{name: tDate.date.split('T')[0], count: tDate.count}
        })
        return dates
    }
    
    render(){
        return(
            <div className='graphContainer'>
                <h3>Daily Progress</h3>
                <LineChart
                width={300}
                height={200}
                data={this.getData()}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return({
        trainDates: state.trainDates
    })
}
export default connect(mapStateToProps)(Graph)