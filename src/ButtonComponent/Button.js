import '../App.css';

export const AButton = ({ buttonType, textType, onPress, text }) => {
    return (
        <>

            <button className={`App-button ${buttonType}`} id={`${buttonType}`} onClick={onPress}>
                <p id={`${textType}`}>{text}</p>
            </button>

        </>
    )
}