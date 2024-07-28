import { useState } from "react";

function Textbox(props) {

  // Textbox property
    const { placeHolder = 'Enter Text...', id = '', iconName = 'accessibility-outline', inputType = 'money' } = props;

    const [activeClass, setActiveClass] = useState('shadow-whole');
    const [value, setValue] = useState('');

    const active = `
    border-4 border-{rgb(236, 236, 236)}
    shadow-border-1
    duration-500
    `;

    function formatMoney(amount) {
      return '$' + Number(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    function handleOnFocus(e) {
      setActiveClass(active)
      if (inputType === 'percentage') {
        setValue(e.target.value.slice(0, -1));
      } else if (inputType === 'money') {
        setValue(e.target.value.slice(1));
      };
    };

    function handleBlur(e) {

      // There is value in the textbox
      if (value.length > 0) {

        setActiveClass('shadow-whole font-bold');

        // If the Textbox is for a percentage
        if (inputType === 'percentage') {

          if (value === '0') {
            setValue('0%');
          } else if (value === '') {
            setValue('');
          }
           else if (!parseFloat(value) || parseFloat(value) < 0) {
            setValue('');
          } else {
            if (parseFloat(value) > 100) {
              setValue('100%');
            } else {
              setValue(value + '%');
            }
          }
          
        } else if (inputType === 'money') {
          if (value === '0') {
            setValue('$0.00');
          } else if (value === '') {
            setValue('');
          }
           else if (!parseFloat(value) || parseFloat(value) < 0) {
            setValue('');
          } else {
            if (value.split(',').length > 1) {
              setValue(formatMoney(value.split(',').join('')));
            } else {
              setValue(formatMoney(value));
            }
          }
        };

      } else {
        setActiveClass('shadow-whole');
      }
    }

    function handleOnChange(e) {
      setValue(e.target.value);
    }

    return (
      <div className="w-full h-full
                      flex gap-4 justify-center items-center">
        <div className="w-14 h-12
                        flex justify-center items-center
                        text-xl
                        border-4 border-{rgb(236, 236, 236)} rounded-circle
                        shadow-border-1">
            <ion-icon name={iconName}></ion-icon>
        </div>
        <div className={`w-full h-12
                        rounded-full
                        duration-500
                        ${activeClass}`}>
            <input type="text" 
                   value={value}
                   placeholder={placeHolder} 
                   onFocus={ handleOnFocus }
                   onBlur={ handleBlur }
                   onChange={ handleOnChange }
                   onKeyDown={ (e) => { if (e.code === 'Enter' || e.code === 'NumpadEnter') { e.target.blur() } } }
                   id={id} 
                   className={`${props.class}
                              w-full h-full
                              text-center outline-none text-xl
                              bg-transparent`}/>
        </div>
      </div>
    );
  }
  
  export default Textbox;


