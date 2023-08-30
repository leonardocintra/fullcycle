export function deepFreeze<T>(obj: T): Readonly<T> {
  const propNames: string[] = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value: any = obj[name as keyof T];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}
