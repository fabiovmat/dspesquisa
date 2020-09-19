export type GamePlatForm = 'XBOX' | 'PC' | 'PLAYSTATION' ;


export type Game = {

    id : number;
    title : string;
    platform : GamePlatForm;
    label: string;
    value: number;
    }
