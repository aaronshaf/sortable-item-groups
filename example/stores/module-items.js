import Uniflow from 'uniflow'
import ModulesActions from '../actions/modules'
import flatten from 'lodash-node/modern/array/flatten'
import indexBy from 'lodash-node/modern/collection/indexBy'

const ModuleItemsStore = Uniflow.createStore({
  state: {
    itemsByHref: {}
  }
})

ModulesActions.on('modules-fetch-success', function (modules) {
  let items = flatten(modules.map(module => module.items))
  let itemsByHref = indexBy(items, 'href')
  ModulesStore.setState({itemsByHref})
})

export default ModuleItemsStore
