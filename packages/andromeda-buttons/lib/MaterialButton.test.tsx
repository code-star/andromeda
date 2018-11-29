import * as renderer from 'react-test-renderer'
import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton
} from './MaterialButton.render'

describe('<MaterialButton />', () => {
  describe('Snaphot', () => {
    test('must match containedDefaultMaterialButton', () => {
      expect(renderer.create(containedDefaultMaterialButton).toJSON()).toMatchSnapshot()
    })

    test('must match containedPrimaryMaterialButton', () => {
      expect(renderer.create(containedPrimaryMaterialButton).toJSON()).toMatchSnapshot()
    })

    test('must match containedSecondaryMaterialButton', () => {
      expect(renderer.create(containedSecondaryMaterialButton).toJSON()).toMatchSnapshot()
    })
  })
})
