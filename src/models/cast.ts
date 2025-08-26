export type person={
    id:       number;
    url:      string;
    name:     string;
    country:  string;
    birthday: Date;
    gender:   string;
    image:    {
        medium:string,
        original:string
    };
}
export type Cast={
    person:person
}