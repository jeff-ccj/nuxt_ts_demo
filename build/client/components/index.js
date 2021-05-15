import { wrapFunctional } from './utils'

export { default as Logo } from '../../../client/components/Logo.vue'

export const LazyLogo = import('../../../client/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
