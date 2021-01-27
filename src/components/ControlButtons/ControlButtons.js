function ControlButtons(props) {
    return (
        <p>
            <button id="start" onClick={props.onClickStart}>Start</button>
            <button id="pause" onClick={props.onClickPause}>Pause</button>
            <button id="reset">Reset</button>
        </p>
    )
}

export default ControlButtons;