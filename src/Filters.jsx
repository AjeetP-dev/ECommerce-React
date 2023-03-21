import { CheckPicker } from "rsuite";
import "./styles/filters.scss"


export default function FIlters({setFilterSelected}){
const dataForFilters=[{label:"delivery",value:"delivery"},{label:"dummy",value:"dummy"}]

const selectFilters=(value,item,event)=>{
    if(event.target.checked)
setFilterSelected([item.value])
else
setFilterSelected([])
}
return(
    <>
    <div style={{width:"100%",marginBottom:"50px",marginLeft:"60px"}}>
    <CheckPicker appearance="subtle" placeholder="Filters" data={dataForFilters} searchable={false} onSelect={selectFilters}>
    </CheckPicker>
    </div>
    </>
)
}