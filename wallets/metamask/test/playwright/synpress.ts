import { testWithSynpress } from '@w84april/synpress-core'
import { metaMaskFixtures } from '../../src/playwright'
import connectedSetup from './wallet-setup/connected.setup'

export default testWithSynpress(metaMaskFixtures(connectedSetup))
