export type SystemThemeTypes = 'light' | 'dark' | 'system';

export default function useDark(theme: SystemThemeTypes){
  useColorMode().preference = theme
}