import { NestedObject } from "./base";

export interface Account {
    InternalID?: number,
    UUID?:string,
    ExternalID?:string,
    City?: string,
    Country?: string,
    CreationDate?: string,
    Debts30?: number,
    Debts60?: number,
    Debts90?: number,
    DebtsAbove90?:number,
    Discount?: number,
    Email?: string,
    Hidden?: boolean,
    Latitude?: number,
    Longitude?:number,
    Mobile?:string,
    ModificationDateTime?: string,
    Name?: string,
    Note?: string,
    Phone?: string,
    Prop1?: string,
    Prop2?: string,
    Prop3?: string,
    Prop4?: string,
    Prop5?: string,
    State?: string,
    Status?: number,
    StatusName?: string,
    Street?: string,
    Type?: string,
    TypeDefinitionID?: number,
    ZipCode?: string,
    Parent?: string,
    PriceList?: string,
    SpecialPriceList?: string,
    Users?:NestedObject,
    Catalogs?:NestedObject
}