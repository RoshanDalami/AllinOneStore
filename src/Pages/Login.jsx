import React,{useState} from 'react';

import classes from './Login.module.css';

const Login = () => {
    const [name,setName]=useState('');
    const onNameChangeHandler = (event)=>{
        setName(event.target.value)
    }
  return (
    <div className={classes.container}>
     <div className={classes.wrapper}>

      <form action="" className={classes.form }>
    <label htmlFor="" className={classes.label}>Name</label>
        <input type="text" placeholder='Enter your name' className={classes.input} onChange={onNameChangeHandler} />
      
      </form>
     </div>
     
    </div>
  )
}

export default Login
