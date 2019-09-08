import React, { Component } from 'react'
import renderer from 'react-test-renderer'

import CreatePassword from './CreatePassword'

test('should render correctly', () => {
    const tree = renderer.create(<CreatePassword />).toJSON()

    expect(tree).toMatchSnapshot();
})
