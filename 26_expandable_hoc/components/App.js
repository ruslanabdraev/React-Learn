import MenuButton from './MenuButton'
import Expandable from './Expandable'
import HiddenMessage from './ShowHideMessage'

const PopUpButton = Expandable(MenuButton)

const App = ()=>
<div>
<HiddenMessage hidden={true}>This is a hidden message</HiddenMessage>
<PopUpButton hidden={true} txt="toggle popup">
    <h1>Hidden Content</h1>
    <p>This content will start off hidden</p>
</PopUpButton>
</div>


export default App