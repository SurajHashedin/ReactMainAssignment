
import { useNavigate, useParams ,useNavigation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      item : [],
      isLoaded:false,


    }


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

        <div className='App'>
   
    <div className='container'>

      <div className='row'>
        
        {items.map(item=>
    
          <div className='col-sm-8'>
                  <div class="card">
                  <h1 className='text-center text-success my-5'> Profile of {item.name}</h1>
                      <img class="card-img-top" src={item.images.md} alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title">{item.name}</h5>

                          <label for="file">powerstats:</label>
                              <progress id="file" value={item.powerstats.powerstats} max="60"> {item.powerstats.powerstats}%</progress>
                              <label for="file">biography:</label>
                              <progress id="file" value={item.powerstats.intelligence} max="60"> {item.powerstats.intelligence}% </progress>
                              <label for="file">connections:   </label>
                              <progress id="file" value={item.powerstats.power} max="60"> {item.powerstats.power}%</progress>



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
export default Profile;
