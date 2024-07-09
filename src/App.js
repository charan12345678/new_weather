import './App.css';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { useEffect, useState,useRef } from 'react';
import newChild from './newChild';


function App(props) {

  // const { sliceName } = props

  // const student_name = useSelector((state) => state.initialState)

  // const dispatch = useDispatch()

  // console.log(sliceName)

  const [name, setName] = useState('');
  const [ age, setAge ] = useState(0);
  const result = useRef([]);

  const [ texts, setTexts ] = useState([]);

  const previousInputValue = useRef("");


  const handleSubmit = (event) => {

    event.preventDefault();

    // localStorage.setItem("Text", name);

   let arr2 = [];
   
   arr2.push(name);

   console.log(arr2);
  
   result.current = result.current + '-'+ name;

   let str = String(result.current);

   let newRes = str.split('-');

   newRes.shift();

    setTexts(newRes);

    setName('')

  }

  const onDelete = (index) => {
   
    let newarr = [...texts];

    newarr.splice(index, 1);

    // console.log(newarr);

    setTexts(newarr);
  }

  const handleSimultaneousTyping = (event) => {

    event.preventDefault();
    
    // if(event.target.name=='name'){
    //   setName(event.target.value)
    // } else {
    //   setAge(event.target.value)
    // }

    setName(event.target.value)

    // let res = result + event.target.value;
     
    // setResult(res);
  }

  let str = String(result.current);

  // console.log(str.split(' '));

  console.log('Hi');

  console.log(texts);

  return (

    <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: '30%', height:'650px', margin :'auto',marginTop:'50px',paddingTop:'5em' }}>

      <div style={{padding:'3em'}}>

      <div style={{textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'space-evenly',marginBottom:'3.5em'}}>
      <span style={{marginBottom:'5px',fontWeight:900,fontSize:'24px'}}>
      Notes App
      </span>
      <span style={{fontWeight:600,fontSize:'18px'}}>
      Enter your Notes
      </span>
      
      </div>

    <div>
        
            <input
            type="text" 
            value={name}
            style={{display:'block',height:'50px',width:'160px'}}
            name="name"
            placeholder='Number1'
            onChange={e => setName(e.target.value)}
          />
          
            <button onClick={handleSubmit}>
            Enter the Notes
            </button>

            <button onClick={() => {
              result.current = ''
              setTexts([])
              setName('')
            }}>
            Delete the text
            </button>
      </div>
    
      </div>

      
       
      
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>

      {texts.length>0 ? texts.map(
        (text,index) => (

          <button style={{padding:'0.5em', cursor:'pointer'}} onClick={() => onDelete(index)} >
          {text}
          </button>
          
          // <input key={index}
          // type="text" 
          // value={text}
          // style={{display:'block',height:'20px',width:'210px', marginLeft:'3.5em',marginBottom:'1.5em'}}
          // name="name"
          // onChange={e => setName(e.target.value)}
          // >
          // </input>
          
        )
      ) : ''}
      
      </div>

      




      

      

    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     sliceName: state.student
//   };
// };

export default App;
