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

    axios.get("/argonautes")
      .then( (res) => {

        let data = [];

        for (let i = 0; i < res.data.length; i++) {
            data.push(res.data[i])
        }

        setArgonautes(data)
    })

  };

  const createArgonaute = async (e) => {
    e.preventDefault()
    const re = /([a-zA-Z])\w+/g

    if(!argonaute) {
      alert("Please enter something")
      return 
    } 
    else if (argonautes.some( (argo) => argo === argonaute)) {
      alert(`${argonaute} already exists`)
      return
    } 
    else if (!re.test(argonaute)) {
      alert(`${argonaute} contains invalid character(s)`)

    } else {
      const newArgonaute = {
        name : argonaute
      }

      axios.post('/argonautes', newArgonaute)
        .then((res) => {
          setArgonautes([...argonautes, res.data]);
          setArgonaute("");
        })
        .catch((err) => {
          console.error(err);
        })
    }
  };

  const deleteArgonaute = async (id) => {
    axios.delete(`/argonautes/${id}`)
      .then((res) => {
        console.log(res, "Argonaute deleted");
        setArgonautes(argonautes.filter(({_id : i}) => id !== i))
      })
      .catch((err) => {
        console.error(err);
      })
  }


  return (
    <div className="m-auto overflow-hidden font-mono">
      <Header />
      <Main setArgonaute={setArgonaute} argonaute={argonaute} argonautes={argonautes} createArgonaute={createArgonaute} deleteArgonaute={deleteArgonaute}/>
      <Footer />
    </div>
  );
}

export default App;
