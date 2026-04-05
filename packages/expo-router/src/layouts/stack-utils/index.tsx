import { StackHeaderComponent } from './StackHeaderComponent';
export const StackHeader = StackHeaderComponent;

export type { StackHeaderProps } from './StackHeaderComponent';
export { StackSearchBar, type StackSearchBarProps } from './StackSearchBar';

export * from './toolbar';
export * from './screen';

export {
  StackScreen,
  appendScreenStackPropsToOptions,
  validateStackPresentation,
  type StackScreenProps,
  type ExtendedStackNavigationOptions,
} from './StackScreen';

export { mapProtectedScreen } from './mapProtectedScreen';
