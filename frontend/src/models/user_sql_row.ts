export class UserRowSql {
    id: number;
    name: string;
    email: string;
    position: string;
    last_edited: string;

    constructor(id: number, name: string, email: string, position: string, last_edited: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.position = position;
        this.last_edited = last_edited;
    }
}