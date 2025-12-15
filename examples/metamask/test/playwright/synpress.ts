import { testWithSynpress } from '@w84april/synpress'
import { metaMaskFixtures } from '@w84april/synpress/playwright'
import connectedSetup from '../wallet-setup/connected.setup'

export default testWithSynpress(metaMaskFixtures(connectedSetup))
