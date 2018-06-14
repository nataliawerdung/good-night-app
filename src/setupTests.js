import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer, createMatchers } from 'jest-emotion'
import * as emotion from 'emotion'
import 'jest-localstorage-mock'

expect.addSnapshotSerializer(createSerializer(emotion))
expect.extend(createMatchers(emotion))

Enzyme.configure({
  adapter: new Adapter(),
})
