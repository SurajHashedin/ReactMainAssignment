

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams ,useNavigation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import { Card, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';

import Profile from './Profile'


class Homepage extends Component {

  constructor(props){
    super(props);
    this.state = {
      item : [],
      isLoaded:false,


    }


  }
  name1(e, id) {
    const navigate = useNavigation();
    
    
        navigate(`profile/${id}`);
    
    
    
  }



  componentDidMount() {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items:json,
        })
      });

  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> Loading...</div>
    }
    else{
      return (
        // <div className="App">
        //   <div class="card" style="width: 18rem;">
        //   {/* <ul>
          
        //     {items.map(item => (
        //       <li key = {item.id}>
                
        //         Name: {item.name} | Strength: {item.powerstats.strength} | Intelligence : {item.powerstats.intelligence} | Power : {item.powerstats.power}
                
        //       </li>
        //     ))}
            
        //   </ul> */}
        <div className='App'>
    <h1 className='text-center text-success my-5'> Hall of Fame</h1>
    <div className='container'>

      <div className='row'>
        
        {items.map(item=>
    
<div className='col-sm-3'>
        <div class="card">
            <img class="card-img-top" src={item.images.md} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <label for="file">Strength:</label>
                    <progress id="file" value={item.powerstats.strength} max="60"> {item.powerstats.strength}%</progress>
                    <label for="file">Intelligence:</label>
                    <progress id="file" value={item.powerstats.intelligence} max="60"> {item.powerstats.intelligence}% </progress>
                    <label for="file">Power:   </label>
                    <progress id="file" value={item.powerstats.power} max="60"> {item.powerstats.power}%</progress>


                    {/* <div onClick={(e)=> getDetailsOfSuperhero(e, item.id)}> */}
                    
                    <button>See Profile</button>

                </div>

    </div>
   
    </div>
        )}
                  
        </div>
      </div>
        </div>

      );
    }
  }
}
export default Homepage;
