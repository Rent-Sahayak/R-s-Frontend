type GenericObject<T = unknown> = { [key: string]: T }

/** A high-level error object. */
interface ErrorObject {
    error: string,
}

/** Generic type to allow null. */
type Nullable<T> = T | null
export type{GenericObject,Nullable}