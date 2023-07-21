import UserMap from './UserMap.vue'

// UserMap tests
describe('<UserMap />', () => {
  it('renders', () => {
    cy.mount(UserMap)
  })
  it('Save button enable/disable functionality',()=>{
    cy.mount(<UserMap/>)
    cy.contains('button', 'Save')
    cy.should('be.enabled')
    cy.get('button').contains('Save').click()
    cy.should('be.disabled')
})
})
