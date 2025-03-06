const countValue= document.querySelector('#counter');

const increment = () => {
    //get value
    let value = parseInt(countValue.innerText);
    //update the value
    value=value+1;
    // store the value
    countValue.innerText=value;
};

const decrement = () => {
    //get value
    let value = parseInt(countValue.innerText);
    //update the value
    value=value-1;
    // store the value
    countValue.innerText=value;
}; 


