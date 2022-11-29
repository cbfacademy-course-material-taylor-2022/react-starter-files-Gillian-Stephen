import React, {useState} from 'react';
const Search = (props) => {
const [keyword,setKeyword] = useState('');
const handleSubmit = (event)  =>{
    event.preventDefault();
    props.findBooks(props.keyword);
}
return <form onSubmit={handleSubmit}>
<input type="submit" value="Submit" id="submit-button"/>
<label>Search:<input 
    type="text"
    placeholder="Enter search term"
    name="search" 
    value={keyword}
    onChange={(e) => { setKeyword(e.target.value); }} /></label>
    {/* <p style={{color:blue}}><em>{props.keyboard && 'Keywords Ty' */}
</form>;

}
export default Search;


