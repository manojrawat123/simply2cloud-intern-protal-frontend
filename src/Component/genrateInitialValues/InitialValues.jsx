const genrateInitalValues = (inputArr)=>{
    let initialValues = {};

    inputArr.forEach(element => {
        initialValues[element.name] = ""
    })
    return initialValues;
}

export default genrateInitalValues;