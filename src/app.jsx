import React, { Component } from 'react';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='form-group row'>
            <div className='col-12 pt-3 pb-1 mb-1'>
              <h1 className='header mb-0 text-light text-center'>San Diego Top Spots</h1>
              <p className='text-light text-center'>A list of top 30 places to see in San Diego, California.</p>
            </div>
          </div>
        </div>
        <div className='container'>
          {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location}
              /> 
              ))
            }
        </div>
      </div>
    );
  }
}

export default App;
