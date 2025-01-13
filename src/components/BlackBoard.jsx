import React, { useContext } from 'react'; 
import './BlackBoard.css'; 
import Button from '../UI/Button';
import SideBoard from '../UI/SideBoard';
import { useNavigate } from 'react-router-dom';
import { DatasetContext } from '../Context/DatasetContext';


export default function BlackBoard() {
  const navigate = useNavigate(); 
  const { uploadStatus } = useContext(DatasetContext); 
  
  const style = {
    height:'50px', 
    width:'50px'
  }

  return (
    <SideBoard>
        <h1>SalesAnalyse</h1>
        <Button onClick={() => navigate('/')} className='user-button'>
          <img style={style} src='dataset.png' />
          <label>Upload dataset</label>
        </Button>
        {uploadStatus && <Button onClick={() => navigate('/show')} className='user-button'>
          <img style={style} src='visualisation.png' />
          <label>Want to see performance ? </label>
        </Button>
        }
        {/* <Button onClick={() => navigate('/show')} className='user-button'>
          <img style={style} src='visualisation.png' />
          <label>Show Dashboard</label>
        </Button> */}
        {uploadStatus && 
          <Button onClick={() => navigate('/chat')} className='user-button'>
          <img style={style} src='chatbot.png' />
          <label>Want to talk with our data specialist ? </label>
        </Button>}
        {/* <Button onClick={() => navigate('/chat')} className='user-button'>
          <img style={style} src='chatbot.png' />
          <label>Get Insight From Our Bot</label>
        </Button> */}
    </SideBoard>
  )
}
