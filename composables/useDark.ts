export type SystemThemeTypes = "light" | "dark" | "system";

export function useDark(theme: SystemThemeTypes) {
  useColorMode().preference = theme;
}
