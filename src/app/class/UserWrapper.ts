import { User } from '../service/auth-service/auth.service';

export enum STATUS {
    BUSINESS_USER = 'BUSINESS',
    BASIC_USER    = 'BASIC',
    GUEST         = 'GUEST'
}

export class UserWrapper {

    private _username: string;

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    private _email: string;

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    private _name: string;

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    private _basic_user: string;

    public get basic_user(): string  {
        return this._basic_user;
    }
    public set basic_user(value: string) {
        this._basic_user = value;
    }

    private _business_user: string;

    public get business_user(): string {
        return this._business_user;
    }
    public set business_user(value: string) {
        this._business_user = value;
    }

    public get status(): STATUS {
        if(this.business_user){
            return STATUS.BUSINESS_USER
        }

        if(this.basic_user){
            return STATUS.BASIC_USER
        }

        return STATUS.GUEST

    }

    constructor({username, email, name, basic_user, business_user}: User){
        this.username       = username;
        this.email          = email;
        this.name           = name;
        this.basic_user     = basic_user ? basic_user['id'] || basic_user : null;
        this.business_user  = business_user ? business_user['id'] || business_user : null;
    }
}