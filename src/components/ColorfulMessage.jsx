export const ColorfulMessage = (props) => {
    const { color, children } = props;
    const contentStyleA = {
        color,
        fontSize: "18px",
        margin: 100
    };
    
    
    return (
        <p style={contentStyleA}>{props.children}</p>
    )
}