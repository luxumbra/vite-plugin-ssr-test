import { ThirdwebSDKProviderProps } from "@thirdweb-dev/react"

export type PageProps = {}
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: (pageProps: PageProps) => React.ReactElement
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    }
  }
}

export type ThirdWebContext = {
  thirdWeb: ThirdwebSDKProviderProps
}