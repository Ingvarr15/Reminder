import 'styled-components';
import {TTheme} from './ui/theme';

declare module 'styled-components' {
  export type DefaultTheme = TTheme;
}
