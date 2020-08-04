import React from "react";

export const Settings = ({selectedTitle, setTitle}) => {
    const changeName = (event) =>  {
        setTitle(event.target.value)

    }
    return (
        <section>
            <h2>Settings</h2>
            <div>
                <label for="name">Name: </label>
                <input onChange={changeName} type="text" id="name" name="name" value={selectedTitle}/>
            </div>
        </section>
    );
};