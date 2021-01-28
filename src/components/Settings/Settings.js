function Settings(props) {
    return (
        <p>
            <input type="text" value={props.workInterval}onChange={props.handleWork}/> second intervals 
            <input type="text" value={props.restInterval} onChange={props.handleRest} /> seconds rest
        </p>
    )
}

export default Settings;
