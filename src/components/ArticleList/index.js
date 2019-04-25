import React, {Component} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }
render() {
        const articleEls = this.props.articles.map((article, index) =>
        <li key={article.id} className='article-list__li' onClick = {this.handleClick.bind(this, article.id)}>
            <Article article = {article}
                isOpen = {this.state.openArticleId === article.id}
                onBtnClk = {this.handleClick.bind(this, article.id)}
            />
        </li>
    )
    return(
        <ul>
            {articleEls}
        </ul>
    )}

    handleClick = openArticleId => this.setState({ 
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })
} 