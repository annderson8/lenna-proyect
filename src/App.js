import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import $ from 'jquery';
import Header from '@components/Header';
// import Footer from '@components/Footer';
// import About from '@components/About';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-198017971-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    }
  // getResumeData(){
  //   $.ajax({
  //     url:'./resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // componentDidMount(){
  //   this.getResumeData();
  // }

  render() {
    return (
      <div className="App">
        <Header/>
        {/* <About/> */}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
