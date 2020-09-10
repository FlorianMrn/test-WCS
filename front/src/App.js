import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Local Import
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

function App() {

  const [argonaute, setArgonaute] = useState("");
  const [argonautes, setArgonautes] = useState([]);

  useEffect( () => {
      fetchArgo();
  }, []);
 
  const fetchArgo = async () => {

    axios.get('http://localhost:3000/argonautes')
      .then( (res) => {

        let data = [];

        for (let i = 0; i < res.data.length; i++) {
            data.push(res.data[i].name)
        }

        setArgonautes(data)
    })

  };

  const createArgonaute = async (e) => {
    e.preventDefault()

    if(!argonaute) {
      alert("Please enter something")
      return 
    } 
    
    if (argonautes.some( (argo) => argo === argonaute)) {
      alert(`${argonaute} already exists`)
      return
    } 
    
    const newArgonaute = {
      name : argonaute
    }

    axios.post('http://localhost:3000/argonautes', newArgonaute)
      .then((res) => {
        console.log(res.data);
      })

    setArgonautes([...argonautes, argonaute]);
    setArgonaute("");
  };



  return (
    <div className="m-auto overflow-hidden font-mono">
      <Header />
      <Main setArgonaute={setArgonaute} argonaute={argonaute} argonautes={argonautes} createArgonaute={createArgonaute}/>
      <Footer />
    </div>
  );
}

export default App;
