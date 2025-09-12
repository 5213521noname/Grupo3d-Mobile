import DateComponent from '../DateComponent';

export default function DataFim({dateFim, setDateFim}){
    return(
        <DateComponent
            date={dateFim}
            setDate={setDateFim}
            iconName="calendar"
            txtInput="Data Final"
            size={20}
        />
    )
}