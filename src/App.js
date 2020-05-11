import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import styled from "styled-components"
import moment from "moment"

import classroom from "./class.json"

function App() {

  const [day, setDay] = useState("Monday");

  useEffect(() => {
    a();
  }, []) 

  const a = () => {
    var dday = moment().format('dddd');
    var dnum = 0;
    switch(dday) {
      case "Monday":
        dnum = 0;
        break;
      case "Tuesday":
        dnum = 1;
        break;
      case "Wednesday":
        dnum = 2;
        break;
      case "Thursday" :
        dnum = 3;
        break;
      case "Friday" :
        dnum = 4;
        break; 
    }
    setDay(dnum);
    var time = (moment().format('LT'));
    var time2 = time.split(':');
    time2[1] = (time2[1].split(' '))[0];
    
    var num = 0;
    if(time2[0] == 8 && time2[1] >= 40 && time2[1] <= 47) //아침조회
    {
      dnum = 5;
      num = 0;
    }
    else if (time2[0] == 4 && time2[1] >= 40 && time2[1] <= 47) //종례
    {
      dnum = 5;
      num = 0;
    }
    else if(time2[0] >= 8) //오전수업
    {
      if(time2[1] <= 3)
      {
        num = time2[0] - 8;
      }
      else if(time2[1] >= 50)
      {
        num = time2[0] - 7;
      }
    }
    else //오후
    {
      num = parseInt(time2[0]) + 4;
    }
    window.open(classroom[dnum][num], '_self');
  }

  return (
    <Container>
    </Container>
  );
}

export default App;

const Container = styled.div`
  align-content:center;
  display:flex;

`;  

const Zoooom = styled.button`
  position:fixed;
  left:50%;
  top:40%;
  margin-left:-550px;
  margin-top:-50px;
  width:1100px;
  height:200px;
  border-radius:20px;
  border-style:none;
  background-color:#323fff;
  font-size:60px;
  outline:0;
  color:white;
  box-shadow:3px 3px 3px rgba(0,0,0,0.4);
  font-family: 'Varela Round', sans-serif;
`;
