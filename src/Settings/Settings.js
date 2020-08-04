import React from "react";
import { Preview } from '../Preview/Preview';

export const Settings = () => {
    return (
        <section>
            <h2>Settings</h2>
            <div>
                <form action="/action_page.php">
                    <label for="username">Input Title: </label>
                    <input type="text" id="username" name="username"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </section>
    );
};