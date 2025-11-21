// src/app-expo/ux/styles.ts
import { StyleSheet } from 'react-native';
import theme from './theme';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.white,
  },
  rootStack: {
    flex: 1,
  },
  headerStack: {
    height: 48,
    backgroundColor: theme.colors.themeDarker,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.m,
  },
  listItemsStack: {
    padding: theme.spacing.m,
  },
  mainStack: {
    flex: 1,
  },
  sidebarStack: {
    minWidth: 300,
    backgroundColor: theme.colors.neutralPrimary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  titleStack: {
    alignItems: 'center',
    backgroundColor: theme.colors.neutralPrimaryAlt,
    padding: theme.spacing.m,
  },
  stackPadding: {
    padding: theme.spacing.m,
  },
  stackGaps: {
    gap: theme.spacing.m,
  },
  stackItemPadding: {
    padding: theme.spacing.m,
  },
  stackItemMargin: {
    margin: theme.spacing.m,
  },
});


export default globalStyles;