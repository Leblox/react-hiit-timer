import StartOrPauseButton from '../StartOrPauseButton/StartOrPauseButton';

function ControlButtons(props) {

    return (
        <div>
            < StartOrPauseButton 
            isThereATimer={props.isThereATimer}
            onClickStart={props.onClickStart} 
            onClickPause={props.onClickPause}
            />
            <button className="reset">Reset</button>
        </div>
    )
}

export default ControlButtons;