export interface PersonalData {
    'firstname': string,
    'lastname': string,
    'email': string,
    'payment': string,
    'creditcard': string
}

export interface Seats {
    'id': string,
    'occupied': boolean
}

export interface CinemaPricesInterface {
    product: string;
    price: number;
}