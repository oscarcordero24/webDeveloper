import { useState } from "react";

function Textbox(props) {

  // Textbox property
    const { placeHolder = 'Enter Text...', id = '', iconName = 'accessibility-outline', inputType = 'text' } = props;

    const [activeClass, setActiveClass] = useState('shadow-whole');
    const [value, setValue] = useState('');

    const active = `
    border-4 border-{rgb(236, 236, 236)}
    shadow-border-1
    duration-500
    `;

    function handleOnFocus(e) {
      setActiveClass(active)
      if (inputType === 'percentage') {
        setValue(e.target.value.slice(0, -1));
      };
    };

    function handleBlur(e) {

      // There is value in the textbox
      if (value.length > 0) {

        setActiveClass('shadow-whole font-bold');

        // If the Textbox is for a percentage
        if (inputType === 'percentage') {

            // Parse the value to a number
            let parseString = parseFloat(e.target.value);

            if (e.target.value === '0') {
              // if the value is 0
              setValue(0 + "%")
            } else if (!parseString) {
              // if the value is a text
              alert("Couldn't Parse Value");
              setValue(0 + "%")
            } else {
              // if the value is a number greater than 0
              if (parseString > 100) {
                // if the value is greater than 100
                setValue(100 + "%")
              } else if (parseString < 0) {
                // if the value is less than 0
                setValue(0 + "%")
              } else {
                // if the value is a number between 0 and 100
                setValue(e.target.value + "%")
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
                   onKeyDown={ (e) => { if (e.code === 'Enter') { e.target.blur() } } }
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


