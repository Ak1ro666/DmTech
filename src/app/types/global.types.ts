type OptionalArrayOr<T, Otherwise> = T extends T[]
    ? T[] | undefined
    : Otherwise;
type OptionalUndefinedOr<T, Otherwise> = T extends undefined
    ? undefined
    : Otherwise;
type OptionalNullOr<T, Otherwise> = T extends null
    ? null | undefined
    : Otherwise;
type OptionalStringOr<T, Otherwise> = T extends string
    ? T | undefined
    : Otherwise;
type OptionalNumberOr<T, Otherwise> = T extends number
    ? T | undefined
    : Otherwise;
type OptionalBooleanOr<T, Otherwise> = T extends boolean
    ? boolean | undefined
    : Otherwise;

export type DeepPartial<T> = OptionalStringOr<
    T,
    OptionalNumberOr<
        T,
        OptionalBooleanOr<
            T,
            OptionalNullOr<
                T,
                OptionalUndefinedOr<
                    T,
                    OptionalArrayOr<
                        T,
                        T extends object
                            ? { [Key in keyof T]?: DeepPartial<T[Key]> }
                            : undefined
                    >
                >
            >
        >
    >
>;
