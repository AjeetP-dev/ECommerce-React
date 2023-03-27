import "./styles/filters.scss"


export default function FIlters({ setFilterSelected }) {
function addToFilters(event){
event.target.checked===true && setFilterSelected(prev=>[...prev,event.target.name])
event.target.checked===false && setFilterSelected(prev=>prev.filter((iterator)=>
    iterator!==event.target.name
))
}

    return (
            <div id="filter-container">
                <span style={{width:"10%"}}><h3>Filters</h3></span>
                <div id="filters">
                <span>
                    <p>Available For Delivery</p>
                <input type="checkbox" name="delivery" onClick={addToFilters}/>
                </span>
                <span>
                    <p>Exclude Out of stock</p>
                <input type="checkbox" name="inStock" onClick={addToFilters}/>
                </span>
                </div>
            </div>
    )}