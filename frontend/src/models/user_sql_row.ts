export class UserRowSql {
    id: number;
    name: string;
    email: string;
    position: string;
    lastEdited: string;

    constructor(id: number, name: string, email: string, position: string, lastEdited: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.position = position;
        this.lastEdited = lastEdited;
    }
}