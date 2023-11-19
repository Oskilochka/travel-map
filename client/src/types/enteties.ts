export type User = {
    id: number,
    email: string,
    password: string,
    username: string,
    favorites: FavouritePlace[],
    createdAt: string,
    updatedAt: string
}

// enum check it later
export enum MarkerType {
    PLACE,
    EVENT,
    SHOP,
    PARK,
    TRANSPORT,
    MEDICAL,
    LANDMARK,
    OUTDOOR_ACTIVITY
}

export type Marker = {
    id: number,
    title: string,
    description: string,
    username: string,
    categoryId: number,
    rating: number,
    type: MarkerType,
    latitude: number,
    longitude: number,
    favouritePlaceList: FavouritePlace[],
    createdAt: string,
    updatedAt: string
}

export type FavouritePlace = {
    id: number,
    user: User,
    marker: Marker
}

export type Category = {
    id: number,
    name: string,
}

export type LoginRequest = {
    email: string,
    password: string
}

