// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import React, { useContext } from 'react'
import type { PageContext, ThirdWebContext } from './types'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
export { ThirdWebContextProvider }
export { useThirdwebContext }


const appChainId = ChainId.Mumbai
const Context = React.createContext<ThirdWebContext>(undefined as any)

function ThirdWebContextProvider({ thirdWebContext, children }: { thirdWebContext: ThirdWebContext; children: React.ReactNode }) {
  return <ThirdwebProvider desiredChainId={appChainId}>{children}</ThirdwebProvider>
}

function useThirdwebContext() {
  const thirdWebContext = useContext(Context)
  return thirdWebContext
}
