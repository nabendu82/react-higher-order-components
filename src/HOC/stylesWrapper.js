const styles = {
    default : {
        backgroundColor: '#737373', 
        color: '#eae8e8', 
        padding: '10px'
    }, disable : {
        backgroundColor: '#9c9c9c', 
        color: '#c7c6c6', 
    }
}


const translateProps = (props) => {
    let _styles = {...styles.default}
    if(props.disable){
        _styles = {..._styles, ...styles.disable};  
    }
    const newProps = {...props,styles:_styles }
    return newProps;
} 


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}