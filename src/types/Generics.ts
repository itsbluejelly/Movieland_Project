// A GENERIC TO CREATE AN OBJECT OF SPECIFIED KEYS AND THE SAME VALUE TYPE
export type ObjectGenerator<KeyType extends string | number, ValueType> = {
    [key in KeyType]: ValueType
}