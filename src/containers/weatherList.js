import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import ChartJS from '../components/chartjs'; 

class WeatherList extends Component {
  avarage(data) {
    const sum = data.reduce((sum, value) => {
      return sum + value;
    });
  
    return (sum / data.length).toFixed(2);
  }
  
  getDataFromObject(object, type) {
    let previousDate = '';
    let items = [];
    let forChart = { dates: [], values: []}
    let i = -1;

    object.list.forEach(weather => {
      const date = weather.dt_txt.split(' ')[0];

      if(date !== previousDate) {
        i++;
        previousDate = date;
        items.push({ date: date, value: [] });
      }
      items[i]['value'].push(weather['main'][type]);
    });

    items.forEach(item => {
      forChart.dates.push(item.date); 
      forChart.values.push(this.avarage(item.value));
    });

    return forChart;
  }

  renderTableItems () {
    return this.props.weather.map(cityData => {
      const temp = this.getDataFromObject(cityData, 'temp');
      const pressure = this.getDataFromObject(cityData, 'pressure');
      const humidity = this.getDataFromObject(cityData, 'humidity');

      return (
        <tr key={cityData.city.id}>
          <td className='align-middle'>{cityData.city.name}</td>
          <td className='w-25'>
            <ChartJS data={temp}/>
          </td>
          <td className='w-25'>
            <ChartJS data={pressure}/>
          </td>
          <td className='w-25'>
            <ChartJS data={humidity}/>
          </td>
        </tr>
      )
    });
  }

  render () {
    return (
      <div className="col-sm-12">
        <table className='table'>
          <thead>
            <tr>
              <th className='w-25'>City</th>
              <th className='w-25'>Temperature (C)</th>
              <th className='w-25'>Pressuer (hPa)</th>
              <th className='w-25'>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableItems()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);