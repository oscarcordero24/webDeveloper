import { useState } from "react";

function Card(props) {

    const { fontSize = 'text-base', fontWeight = '', type = '' } = props;
    const [value, setValue] = useState('');

    function handleOnChange(e) {
        setValue(e.target.value);
    }

    function handleOnBlur() {

        if (value === '' || value === '0') {
            setValue('');
        } else if (!parseFloat(value) || parseFloat(value) < 0) {
            alert("Invalid Value");
            setValue('');
        } else {
            if (value.split('.').length === 1) {
                setValue('$' + value + '.00');
            } else if (value.split('.')[1].length < 2) {
                setValue('$' + value + '0');
            } else if (value.split('.')[1].length > 2) {
                setValue('$' + value.split('.')[0] + '.' + value.split('.')[1].slice(0, 2));
            } else {
                setValue('$' + value);
            }
        }
    }

    function handleOnKeyDown(e) {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            e.target.blur();
        }
    }

    if (type === 'input') {

        return (
        
            <div className="w-full h-full p-4 
                            flex justify-center items-center
                            rounded-2xl shadow-border-2">
                <input type='text'
                       value={value} 
                       onChange={ handleOnChange }
                       onBlur={ handleOnBlur }
                       onKeyDown={ handleOnKeyDown }
                       onFocus={ () => {setValue('')} }
                       className={`${fontSize} ${fontWeight} 
                                               w-full h-full 
                                               text-center
                                               bg-transparent 
                                               outline-none`} placeholder={props.textContent} />
            </div>
        );

    } else {

        return (
        
            <div className="w-full h-full p-4 
                            flex justify-center items-center
                            rounded-2xl shadow-border-2">
                <p className={`${fontSize} ${fontWeight}`}>{props.textContent}</p>
            </div>
        );

    }
}
  
export default Card;