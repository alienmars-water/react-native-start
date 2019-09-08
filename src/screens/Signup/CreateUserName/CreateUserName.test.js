import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CreateUserName from './CreateUserName'

Enzyme.configure({ adapter: new Adapter() })

test('should render correctly', () => {
    const tree = renderer.create(<CreateUserName />).toJSON()

    expect(tree).toMatchSnapshot();
})

test('should find testID en', () => {
    const wrapper = shallow(<CreateUserName />)
    expect(wrapper.findWhere(node => node.prop('testID') === 'en')).toBeTruthy()
})

