import { ReactNode } from 'react'
import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'

const prpl: MantineColorsTuple = [
  '#ecedff',
  '#d5d5fd',
  '#a8a8f3',
  '#7979eb',
  '#5150e4',
  '#3736e0',
  '#2929df',
  '#1c1dc6',
  '#1519b2',
  '#08149e',
]

const theme = createTheme({
  primaryColor: 'prpl',
  colors: {
    prpl,
  },
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
