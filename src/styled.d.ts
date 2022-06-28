import 'styled-components'

import { ITheme } from './types/styles'

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
