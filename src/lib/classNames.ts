export type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, bool]) => Boolean(bool))
            .map(([className]) => className),
    ]
        .join(' ');
}