import React from 'react';
import { FaMinusCircle } from "react-icons/fa";

const Main = ({ argonaute, setArgonaute, argonautes, createArgonaute, deleteArgonaute }) => {

    return (
        <main className="flex justify-center items-center h-want flex-col max-w-screen-lg m-auto">
            <h2 className="p-8 text-2xl font-bold">Ajouter un(e) Argonaute</h2>
            <form className="flex flex-col mb-10" onSubmit={createArgonaute}>
                <label htmlFor="name" className="text-xl mb-2">Nom de l'Argonaute :</label>
                <div>
                    <input value={argonaute} id="name" name="name" type="text" placeholder="Charalampos" className="mr-3 rounded p-1 bg-gray-200 focus:bg-white focus:border-blue-400 focus:border-solid" 
                    onChange={({target}) => setArgonaute(target.value)}/>
                    <button type="submit" className="border-solid border-black border-2 rounded p-1 hover:bg-red-200" onClick={createArgonaute}>Envoyer</button>
                </div>
            </form>
            <h2 className="p-4 text-2xl font-bold">Membres de l'équipage</h2>
            <section className="w-full flex h-64 p-2 flex-wrap relative justify-around">
                {argonautes.map( ({_id, name}) => (
                            
                            <div className="shadow-lg p-2 rounded my-2 animate-scale relative w-1/4 h-8 mr-1 text-center font-bold flex justify-center" key={_id}>
                                {name}
                                <FaMinusCircle className="absolute cursor-pointer top-0 right-0 text-gray-500 hover:text-red-600" onClick={() => deleteArgonaute(_id)}/>
                            </div>
                ))}
            </section>
        </main>

    );
};

export default Main;