import TimeComponent from '../TimeComponent';

export default function HoraInicio({timeIni, setTimeIni}){
    return(
        <TimeComponent
            time={timeIni}
            setTime={setTimeIni}
            iconName="clock-o"
            txtInput="Hora início"
            size={20}
        />
    );
}