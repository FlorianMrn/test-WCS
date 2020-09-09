import React from 'react';

const Main = () => {

    return (
        <main className="flex justify-center items-center h-want flex-col max-w-screen-lg m-auto">
            <h2 className="p-8 text-2xl font-bold">Ajouter un(e) Argonaute</h2>
            <form className="flex flex-col mb-16">
                <label htmlFor="name" className="text-center text-xl mb-2">Nom de l'Argonaute</label>
                <div>
                    <input id="name" name="name" type="text" placeholder="Charalampos" className="mr-3 border-solid border-black border-2 rounded p-1"/>
                    <button type="submit" className="border-solid border-black border-2 rounded p-1">Envoyer</button>
                </div>
            </form>
            <h2 className="p-8 text-2xl font-bold">Membres de l'équipage</h2>
            <section className="w-full flex flex-col h-64 p-2">
                <div >Eleftheria</div>
                <div >Gennadios</div>
                <div >Lysimachos</div>
            </section>
        </main>

    );
};

export default Main;