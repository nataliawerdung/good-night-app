import SaveButton from './SaveButton'
import { shallow } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'

describe('SaveButton', () => {
  let wrapper

  let mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<SaveButton onClick={mockFunction} />)
  })

  it('renders a SaveButton', () => {
    expect(wrapper.html()).toContain('save')
  })

  it('has a matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('reacts on click', () => {
    expect(mockFunction.mock.calls.length).toBe(0)
    wrapper.find('button').simulate('click')
    expect(mockFunction.mock.calls.length).toBe(1)
  })
})
