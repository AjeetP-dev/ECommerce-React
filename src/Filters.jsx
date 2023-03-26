import { Checkbox, CheckPicker } from "rsuite";
import "./styles/filters.scss"


export default function FIlters({ setFilterSelected }) {
    const dataForFilters = [{ label: "delivery", value: "delivery" }, { label: "dummy", value: "dummy" }]

    const selectFilters = (value, item, event) => {
        if (event.target.checked)
            setFilterSelected([item.value])
        else
            setFilterSelected([])
    }
    return (
            <div id="filter-container">
                <span style={{width:"20%"}}><h3>Filters</h3></span>
                <div id="filters">
                <span>
                    <p>Available For Delivery</p>
                <input type="checkbox"/>
                </span>
                <span>
                    <p>Exclude Out of stock</p>
                <input type="checkbox"/>
                </span>
                </div>
                {/* <CheckPicker appearance="subtle" placeholder="Filters" data={dataForFilters} searchable={false} onSelect={selectFilters}>
                </CheckPicker> */}
            </div>
    )}