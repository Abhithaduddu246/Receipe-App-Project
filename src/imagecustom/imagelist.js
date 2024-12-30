import React from "react";

import './img.css';

import CustomProgressBar from "./progressbar";




export const imgData=[
{
    id:1,
    name:"Chennai Super Kings",
    source:"https://tse3.explicit.bing.net/th?id=OIP.X4CgIZC9lODb9jAgwXh_EQHaEK&pid=Api&P=0&h=180",
    description:"Chennai Super Kings (CSK) is an Indian professional cricket franchise based in Chennai,  (IPL) franchises incorporated when the league d in 2008",
    players:"No of Players:11", 
    trophy:5,
    button:"see more",  
},
{
    id:2,
    name:"Delhi Capitals",
    source:"https://tse1.mm.bing.net/th?id=OIP.zYqzDJsZLr7eN-3xsmy5QwHaFj&pid=Api&P=0&h=180",
    description:"Delhi Capitals,  is an Indian professional  franchises incorporated when the league was established in 2008  and was one of the ei incorporated ",
   
    players:"No of Players:11",
    trophy:1,
    button:"see more",     
},
{
    id:3,
    name:"Gujarat Titans",
    source:"https://imgk.timesnownews.com/story/Gujarat_Titans_logo.png", 
    description:"Gujarat Titans are a professional franchise cricket  in the Indian Premier League. Founded in 2021, Gujarat Titans'  League.  Gujarat Titans' home ground",
    players:"No of Players:11",
    trophy:1,
    button:"see more",     
},
{
    id:4,
    name:"Mumbai Indians",
    source:"https://tse2.mm.bing.net/th?id=OIP.haNUH_j6sEownkY0cbhQaAHaEZ&pid=Api&P=0&h=180", 
    description:"Mumbai Indians are a professional franchise cricket team based  franchise cricket team based in Mumbaiin the I cricket team based  franchise cricket team based i",
    players:"No of Players:11",
    trophy:5,
    button:"see more",     
},
{
    id:5,
    name:"Kolkata Knight Riders",
    source:"https://tse4.mm.bing.net/th?id=OIP.0Qy5xuN_RR77ChrUv_C_sQHaFj&pid=Api&P=0&h=180",   
    description:"Kolkata Knight Riders are a professional franchise cricket team  League. The franchise is owned by Bollywood actor Shah Rukh Khan, actress Juhi Chawla, ",
    players:"No of Players:11", 
    trophy:2,
    button:"see more",  
},
{
    id:6,
    name:"Lucknow Super Giants",
    source:"https://tse3.mm.bing.net/th?id=OIP.8HGmyL0kG18l9kw1OzS3-wHaFL&pid=Api&P=0&h=180",  
    description:"Lucknow Super Giants are a professional franchise cricket team based in Lucknow,  Indian Premier League. Founded in 2021, the team plays its home matches",
    players:"No of Players:11",
    trophy:0,
    button:"see more",    
},
{
    id:7,
    name:"Punjab Kings",
    source:"https://tse3.mm.bing.net/th?id=OIP.c-gebMBk7xPQsNgSfHWZDAHaEK&pid=Api&P=0&h=180",  
    description:"Punjab Kings (PBKS), formerly Kings XI  Mullanpur, Mohali, Punjab, that plays in the Indian Premier League (IPL). The franchise is jointly o Preity Zinta and Karan Paul.",
    players:"No of Players:11",
    trophy:0, 
    button:"see more",   
},
{
    id:8,
    name:"Rajasthan Royals",
    source:"https://tse1.mm.bing.net/th?id=OIP.kvLY0xOxOQcNJTkoGE7mhQHaEK&pid=Api&P=0&h=180", 
    description:"Rajasthan Royals are a professional franchise cricket team based in Jaipur, Rajasthan, that competes are a professional franchise cricket team in the Indian Premier League.",
    players:"No of Players:11",
    trophy:1,
    button:"see more",     
},
{
    id:9,
    name:"Royal Challengers Bangalore",
    source:"https://tse1.mm.bing.net/th?id=OIP.KTcahHZKkC73I2CRsQUkRAHaEo&pid=Api&P=0&h=180",    
    description:"Royal Challengers Bangalore (RCB), cricket franchise based in Bangalore,  League (IPL). Founded in 2008 by United Spirits, the teaompany's liquor brand, Royal Challenge",
    players:"No of Players:11", 
    trophy:0,
    button:"see more", 
},
{
    id:10,
    name:"Sunrisers Hyderabad",
    source:"https://tse4.mm.bing.net/th?id=OIP.tgCBE2JGFg3Ojv17asdH0QHaEK&pid=Api&P=0&h=180", 
    description:"The Indian Premier League is a professional men's Twenty20 cricket league, conter of ten Indian cities. The league was founded by the Board of Control for  in 2007",
    players:"No of Players:11",
    trophy:1,
    button:"see more",



},

]
imgData.sort((a,b)=> b.trophy-a.trophy);


