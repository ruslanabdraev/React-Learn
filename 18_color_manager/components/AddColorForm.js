import {Component} from 'react'
import PropTypes from 'prop-types'

export default class AddColorForm extends Component {
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e){
        const {_title, _color} = this.refs
        e.preventDefault()
        // alert(`New Color: ${_title.value} ${_color.value}`)
        this.props.onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    
    render(){
        return(
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title..." required></input>
                <input ref="_color" type="color" required></input>
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f=>f // Это просто функция заместительб возвращающая первый переданный ей аргументю Хотя она ничего не делает JavaScript может ее вызвать без выдачи сообщений
}
//export default AddColorForm