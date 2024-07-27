import { useState } from "react";

function Switchbox(props) {

    const { text = 'Checkbox' } = props;
    const [iconName, setIconName] = useState('close-sharp');
    const [activeClass, setActiveClass] = useState('shadow-border-1 duration-500');
    const [isChecked, setIsChecked] = useState(false);

    const active = `
    shadow-border-2 
    duration-500
    `;

    function handleOnChange() {
        if (isChecked) {
            setIsChecked(false);
            setIconName('close-sharp');
            setActiveClass('shadow-border-1 duration-500');
        } else {
            setIsChecked(true);
            setIconName('checkmark-sharp');
            setActiveClass(active);
        }
    }

    return (
        <div className="w-full h-12
                        flex justify-center items-center gap-2 duration-500">
            <label className="cursor-pointer">
                <input type="checkbox" id={props.id} checked={isChecked} onChange={handleOnChange} className="hidden"/>
                <div className={`w-8 h-8
                             flex justify-center items-center
                             border-4 border-{rgb(236, 236, 236)} rounded-circle
                             ${activeClass}`}>
                                <ion-icon name={iconName}></ion-icon>
                </div>
            </label>
            <span className="font-bold">{text}</span>
        </div>
    );
}
  
  export default Switchbox;
