import {Dispatcher} from 'flux'

class CountDownDispatcher extends Dispatcher{
    constructor(){
        super()

        this.handleAction = this.handleAction.bind(this)
    }

    handleAction(action){
        console.log('dispatching action:', action)
        this.dispatch(
            {source: 'VIEW_ACTION', 
            action }
        )
    }
}

export default CountDownDispatcher
