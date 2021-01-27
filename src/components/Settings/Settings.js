function Settings() {
    return (
        <p className="settings">
            <input type="text" id="intervalTime" value="20" /> second intervals <input type="text" id="breakTime" value="10" /> seconds rest <button id="settings">Update</button>
        </p>
    )
}

export default Settings;
