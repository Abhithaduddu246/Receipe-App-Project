import ProgressBar from 'react-bootstrap/ProgressBar';
const CustomProgressBar=(prop) =>{
    const {scale}=prop;
  return <ProgressBar now={scale} />;
}

export default  CustomProgressBar;