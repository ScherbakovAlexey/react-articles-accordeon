import React, {Component, PureComponent} from 'react'

class Article extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            //isOpen: props.defaultOpen,
            count: 0
        }
       // this.handleClick = handleClick.bind(this)
    }
    componentWillMount(){
        console.log('mounting...')
    }
    // componentWillReceiveProps(nextProps){
    //     console.log('WillReceiveProps', nextProps);
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     return this.state.isOpen !== nextState.isOpen
    // }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    render() {
        const {article, isOpen, onBtnClk} = this.props
        const body = isOpen && <section className='card-text'>{article.text}</section>
        console.log('PROPS:', this.props)
        return (
            <div className='card mx-auto' style={{width: '50%'}}>
                <div className='card-header'>
                    <h2 onClick = {this.incCounter}>
                        {article.title}
                         clicked {this.state.count}
                        <button onClick={onBtnClk} className='btn btn-primary btn-lg float-right'>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    {body}
                    <h6 className='card-subtitle text-muted'>date: {(new Date(article.date)).toDateString()}</h6>
                </div>
            </div>
        )
    }

    incCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // handleClick = () => {
    //     console.log('---click')
    //     // this.setState({
    //     //     isOpen: !this.state.isOpen
    //     // })
    // }
}


export default Article