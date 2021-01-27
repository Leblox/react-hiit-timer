function Countdown(props) {
    return (
        <div>
            <h1 id="status">{props.rest ? "Rest" : "Work"}</h1>
            <p className="large"><span id="sec">{props.seconds}</span></p>
        </div>
    );
}

export default Countdown;