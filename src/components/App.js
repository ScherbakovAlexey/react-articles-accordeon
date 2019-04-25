import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    }
    render() {
        console.log('2render', this.state)
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>
                        App name
                        <button className='btn' onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        console.log('1revert', this.state.reverted)
        this.setState({
        reverted: !this.setState.reverted
        })
    }
}

export default App 