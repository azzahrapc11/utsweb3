import React, { Component } from 'react';
import logo from './flash.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color : 'Merah',
      img   : 'merah.jpg',
    };
  }

  clicked (menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name: menu.name,
      color : menu.color,
        img   : menu.img,
    });
  }

  /*menusaya(){
    var gambar;
    if(this.state.active.toLocaleLowerCase() === 'merah'){
      gambar = "merah";
    } else if(this.state.active.toLocaleLowerCase() === 'kuning'){
      gambar = "kuning";
    } else if(this.state.active.toLocaleLowerCase() === 'hijau'){
      gambar = "hijau";
    } else if(this.state.active.toLocaleLowerCase() === 'biru'){
      gambar = "biru";
    } 

    return <img src={gambar+".jpg"} width="200"></img>
  }*/
  
  render() {
    return (
      <div id="App">

      {/*map akan loop sebanyak menu yang di definisikan */}
      {/*kemudian mengembalikan elemen <a/> */}
      <nav className="nav">{this.props.items.map((menu, index)  => {
          var style = 'menu';

          if (this.state.color === menu.color) {
            style = `${style} is-active`;
          } 

        return <a
           className={style+" "+menu.color}

          //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked' 
          onClick={this.clicked.bind(this, menu)}
          key={index}
          >
              {menu.name}
        </a>;
        }) }
        </nav>

        <div className="info">
        Meet <span className={"selected " +this.state.color}>
          {this.state.name}</span> <br/> <br/>

        <img src={this.state.img} width="400"></img>
      {/*{this.menusaya()} */}
      </div>
  </div>
        
    );
  }   
} 

export default App;
