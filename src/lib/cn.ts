type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]) {
  return classes.filter((value): value is string => Boolean(value)).join(" ");
}
