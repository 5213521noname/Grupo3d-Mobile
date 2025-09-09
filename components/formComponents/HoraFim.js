import TimeComponent from '../TimeComponent';

export default function HoraInicio({timeFim, setTimeFim}){
    return(
        <TimeComponent
            time={timeFim}
            setTime={setTimeFim}
            iconName="clock-o"
            txtInput="Hora Final"
            size={20}
        />
    );
}