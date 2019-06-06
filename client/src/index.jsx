import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductDescription from './components/product-description/product-description.jsx';
import GeneralInfo from './components/product-general-info/general-info.jsx';
import axios from 'axios';


class Description extends Component {
  constructor(props){
    super(props)
    this.state = {
      productInfo: {},
    }
  }

  componentDidMount() {
    // `http://description.us-east-2.elasticbeanstalk.com/description/${1001}`
    axios.get(`http://localhost:1128/${1001}`)
    .then(response => {
       return response.data;
    })
    .then(description => {
      this.setState({
          productInfo: description,
      })   
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  componentDidUpdate(prevProps) {
    // `http://description.us-east-2.elasticbeanstalk.com/description/${this.props.id}`
    if(prevProps.id !== this.props.id && this.props.id !== "") {
      axios.get(`http://localhost:1128/${this.props.id}`)
      .then(response => {
        return response.data;
     })
     .then(description => {
      if(description) {
        this.setState({
          productInfo: description,
        })
      } 
     })
     .catch(err => {
       console.log(err);
     })
    }

  }

  render() {
    return (
      <>
        <GeneralInfo productInfo = {this.state.productInfo}/>
        <ProductDescription productDescription= {this.state.productInfo.description} id={this.state.productInfo._id}/>
      </>
    )
  }
}

window.Description = Description;
// ReactDOM.render(<Description/>, document.getElementById('description'));





