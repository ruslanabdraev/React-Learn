import Star from '../../../src/components/ui/Star'
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({adapter: new Adapter()})

describe("<Star/> UI Component", ()=>{
    
    it("renders default star", () =>
        expect(
            enzyme.shallow(<Star />)
                .find('div.star')
                .length
        ).toBe(1)
    )

    it("renders selected stars", () =>
        expect(
            enzyme.shallow(<Star selected={true} />)
                .find('div.selected.star')
                .length
        ).toBe(1)
    )

    it("invokes onClick", ()=>{
        const _click = jest.fn()

        enzyme.shallow(<Star onClick={_click}></Star>)
            .find('div.star')
            .simulate('click')
        
        expect(_click).toBeCalled()
    })

})