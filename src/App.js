import "./htmls/style.css";
import {Blocks,Profile} from "./blocks"
import React, { Component } from 'react';
import {Home,Explore,Notification,Messages,Bookmarks,Lists,ProfileI,Dots} from './images';
class Container extends Component {
  state = { 
    blocks:[{blockName:"Home",icon:Home},
    {blockName:"Explore",icon:Explore},
    {blockName:"Notification",icon:Notification},
    {blockName:"Messages",icon:Messages},
    {blockName:"Bookmarks",icon:Bookmarks},
    {blockName:"Lists",icon:Lists},
    {blockName:"Profile",icon1:ProfileI,icon2:Dots}],
   } 
  render() { 
    return (
      <React.Fragment>
        <section class="container">
        <img src={require("./htmls/twitterlogo.png")} class="container-item icon"/>
         {this.state.blocks.map(block=>(block.blockName!=="Profile"?<Blocks key={block} blockName={block.blockName} img={block.icon}/>:<Profile key={block} img1={block.icon1} img2={block.icon2}/>))}


        </section>


      </React.Fragment>
    );
  }
}
 
export default Container;