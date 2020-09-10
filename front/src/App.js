import React, { useState, useEffect } from 'react';

// Local Import
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

// API
import APIHelper from './APIHelper.js';

function App() {

  const [argonaute, setArgonaute] = useState("");
  const [argonautes, setArgonautes] = useState([]);

  useEffect(() => {

      const fetchArgonautes = async () => {
        const argonautes = await APIHelper.getAllArgonautes()
        setArgonautes(argonautes);
      }

      fetchArgonautes();

  }, []);

  const createArgonaute = async (e) => {
    e.preventDefault()
    if(!argonaute) {
      alert("Please enter something")
      return 
    } 
    
    if (argonautes.some( ({ argo }) => argo === argonaute)) {
      alert(`${argonaute} already exists`)
      return
    } 
    
    const newArgonaute = await APIHelper.createArgonaute(argonaute)
    setArgonautes([...argonautes, newArgonaute])

  };

  return (
    <div className="m-auto overflow-hidden">
      <Header />
      <Main setArgonaute={setArgonaute} argonaute={argonaute} argonautes={argonautes} createArgonaute={createArgonaute}/>
      <Footer />
    </div>
  );
}

export default App;
