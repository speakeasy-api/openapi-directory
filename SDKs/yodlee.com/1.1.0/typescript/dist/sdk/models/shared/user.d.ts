import { SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";
import { UserResponsePreferences } from "./userresponsepreferences";
import { UserSession } from "./usersession";
export declare enum UserRoleTypeEnum {
    Individual = "INDIVIDUAL"
}
export declare class User extends SpeakeasyBase {
    id?: number;
    loginName?: string;
    name?: Name;
    preferences?: UserResponsePreferences;
    roleType?: UserRoleTypeEnum;
    session?: UserSession;
}
