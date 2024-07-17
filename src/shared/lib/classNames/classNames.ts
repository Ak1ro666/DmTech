export type Mods = Record<string, boolean | string>;

export default function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([className]) => className),
    ]
        .join(' ')
        .trim();
}
