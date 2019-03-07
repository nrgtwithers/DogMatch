import React from "react";

function AdoptionSearch(props){
  return(
    <form>
    <div class="form-group">
      <label htmlFor="breed">Breed</label>
      <textarea class="form-control" id="breed" rows="1"></textarea>
    </div>
    {/* <div class="form-group col-md-2">
      <label for="zip">Zip</label>
      <input 
       value={props.search}
       onChange={props.handleInputChange}
       type="text" class="form-control" id="zip" />
    </div> */}
    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
  </form>
  )
}

export default AdoptionSearch