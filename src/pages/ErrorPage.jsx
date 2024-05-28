import { useState } from "react";
import { FirstError } from "../components/FirstError";
import { SecondErrorImage } from "../components/SecondErrorImage";

export function ErrorPage () {

    const [secondError, setSecondError] = useState(false);

    const changeView = () => {
        setSecondError({secondError: true});
    }

    return (
        <div className="errorPage">
            {
                (secondError === false) ? <FirstError changeView={changeView}/> : <SecondErrorImage />
            }
        </div>
    );
}