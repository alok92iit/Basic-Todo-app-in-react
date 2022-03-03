import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { Form } from './Form';
import TodoApp from './TodoApp';


describe("Test form",()=>{
    it("Top component",()=>{
        let wrapper =shallow(<TodoApp/>)
        console.log(wrapper.debug())
    })
    it("form check",()=>{
        let wrapper =shallow(<Form/>)
        console.log(wrapper.debug())
    })
})