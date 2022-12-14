export class User {
    public email: string
    public password: string
    public role: string
    public favoriteCities: any[]
    constructor(email: string, password: string, role: string, favoriteCities: any[]
    ) {
        this.email = email;
        this.password = password;
        this.role = role
        this.favoriteCities = favoriteCities
    }
}
