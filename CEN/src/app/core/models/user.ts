import { UserPermission } from "./user-permission.enum";

export interface IUser {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    userPermissions: UserPermission[];
    jwtToken?: string;
}
