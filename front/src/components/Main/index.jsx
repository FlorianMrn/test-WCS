import React from 'react';

const Main = ({ argonaute, setArgonaute, argonautes, createArgonaute }) => {

    return (
        <main className="flex justify-center items-center h-want flex-col max-w-screen-lg m-auto">
            <h2 className="p-8 text-2xl font-bold">Ajouter un(e) Argonaute</h2>
            <form className="flex flex-col mb-16" onSubmit={createArgonaute}>
                <label htmlFor="name" className="text-center text-xl mb-2">Nom de l'Argonaute</label>
                <div>
                    <input value={argonaute} id="name" name="name" type="text" placeholder="Charalampos" className="mr-3 border-solid border-black border-2 rounded p-1" 
                    onChange={({target}) => setArgonaute(target.value)}/>
                    <button type="submit" className="border-solid border-black border-2 rounded p-1" onClick={createArgonaute}>Envoyer</button>
                </div>
            </form>
            <h2 className="p-4 text-2xl font-bold">Membres de l'équipage</h2>
            <section className="w-full flex flex-col h-64 p-2 flex-wrap">
                {argonautes.map( (name) => (

                            <div className="shadow-lg p-2 mx-auto rounded my-2 animate-scale" key={name}>{name}</div>
                ))}
            </section>
        </main>

    );
};

export default Main;