// A GENERIC TO CREATE AN OBJECT OF SPECIFIED KEYS AND THE SAME VALUE TYPE
export type ObjectGenerator<KeyType extends string | number, ValueType> = {
    [key in KeyType]: ValueType
}

// A GENERIC TO EMIT A CERTAIN FIELD FROM AN OBJECT
export type ObjectEmitter<UniversalType extends object, SpecifiedType extends keyof UniversalType> = {
    [key in keyof UniversalType as key extends SpecifiedType ? never : key]: UniversalType[key]
}