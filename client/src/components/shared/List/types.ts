export enum PlaceType {
    attraction = "attraction",
    hotels = "hotels",
    restaurants = "restaurants"
}

export enum Rate {
    all = 0,
    moreThanTwo = 1,
    moreThanThree = 2,
    moreThanFour = 3,
}

export type Place = {
    id: string,
    title: string
}
