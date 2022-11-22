import React, { Component } from 'react';
import "./htmls/style.css";
class Blocks extends Component {
    state = {  } 
    render() { 
        return (
            <div class="container-item">
        <span> <img src={this.props.img}/>{this.props.blockName}</span>
        
     </div>
        );
    }
};
class Profile extends Component {
    render() { 
        return ( <div><button type="submit" class="tweet tweet-big">Tweet</button>
        <div class="container-item profile" id="profile">
          <img src={this.props.img1} class="profile-pic"/><ul><li class="profile-name">Name</li><li class="user-name">@something</li></ul>  <img src={this.props.img2}/>
        </div>
        </div>);
    }
}
 
export {Profile,Blocks};
