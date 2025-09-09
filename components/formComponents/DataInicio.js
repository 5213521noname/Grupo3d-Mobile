import DateComponent from '../DateComponent';

export default function DataInicio({dateIni, setDateIni}){
    return(
        <DateComponent
            date={dateIni}
            setDate={setDateIni}
            iconName="clock-o"
            txtInput="Data início"
            size={20}
        />
    )
}