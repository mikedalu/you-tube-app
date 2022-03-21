import React from 'react'


class SearchBar extends React.Component {

        state = {term: ''}
        onChange= (e)=> {
            this.setState({term: e.target.value})
        }
        onSubmit = (e)=>{
            e.preventDefault()
            this.props.searchVideo(this.state.term)
        }

    render(){
    
        return (
            <div className=" search-bar ui segment" style={{marginTop: '10px'}}>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Video search</label>
                        <input type="text" value ={this.state.term} onChange={this.onChange}></input>
                    </div>
                </form>

            
            </div>
        )
    }
}

export default SearchBar;