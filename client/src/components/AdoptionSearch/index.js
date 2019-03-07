import React from "react";
import "./style.css";

function AdoptionSearch(props){
  return(
    <form>
    <div class="form-group">
      <label htmlFor="breed"><h4 className="How">Search for Breeds Available for Adoption</h4></label>
      <textarea class="form-control" id="breed" rows="1"></textarea>
    </div>
    {/* <div class="form-group col-md-2">
      <label for="zip">Zip</label>
      <input 
       value={props.search}
       onChange={props.handleInputChange}
       type="text" class="form-control" id="zip" />
    </div> */}
    <button type="submit" id="search" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
  </form>
  )
}

export default AdoptionSearch