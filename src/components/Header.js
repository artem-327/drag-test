const Header = ({cardPlus, cardRemove, activeCard}) => {
    const headerStyle = {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const buttonStyle = {
        margin: 10,
        padding: '10px 30px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        border: '1px solid gray'
    }
    
    return (
        <div style={headerStyle}>
            <div>
                <button style={buttonStyle} onClick={(e) => {
                    e.stopPropagation()
                    cardPlus()}
                }> Add node </button>
                <button style={buttonStyle} onClick={(e) => {
                    e.stopPropagation()
                    cardRemove(activeCard)}
                }> Remove node </button>
            </div>
        </div>
    );
}

export default Header;
