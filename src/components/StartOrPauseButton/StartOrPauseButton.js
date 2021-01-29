function StartOrPauseButton(props) {

    let startButton = <button id="start" onClick={props.onClickStart}>Start</button>;
    let pauseButton = <button id="pause" onClick={props.onClickPause}>Pause</button>;

    return (
        <div>
            {(props.isThereATimer === false) ? startButton : pauseButton}
        </div>
    )
}

export default StartOrPauseButton;