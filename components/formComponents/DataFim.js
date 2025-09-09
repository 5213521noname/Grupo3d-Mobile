import DateComponent from '../DateComponent';

export default function DataFim({dateFim, setDateFim}){
    return(
        <DateComponent
            date={dateFim}
            setDate={setDateFim}
            iconName="clock-o"
            txtInput="Data Final"
            size={20}
        />
    )
}