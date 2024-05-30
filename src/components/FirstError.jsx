import error from "../memes_images/404error.jpg";

export function FirstError ({changeView}) {

    return (
    <div>
        <img src={error} alt="404 ERROR" onClick={changeView} className="errorImage first"/>
    </div>
    );
};