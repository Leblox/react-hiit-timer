function Settings(props) {
    return (
        <p>
            <input type="text" value={props.workInterval}onChange={props.handleWork}/> work (seconds) 
            <input type="text" value={props.restInterval} onChange={props.handleRest} /> rest (seconds)
        </p>
    )
}

export default Settings;
