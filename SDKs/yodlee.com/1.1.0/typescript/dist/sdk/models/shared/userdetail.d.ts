import { SpeakeasyBase } from "../../../internal/utils";
import { UserAddress } from "./useraddress";
import { Name } from "./name";
import { UserResponsePreferences } from "./userresponsepreferences";
export declare enum UserDetailRoleTypeEnum {
    Individual = "INDIVIDUAL"
}
export declare class UserDetail extends SpeakeasyBase {
    address?: UserAddress;
    email?: string;
    id?: number;
    loginName?: string;
    name?: Name;
    preferences?: UserResponsePreferences;
    roleType?: UserDetailRoleTypeEnum;
    segmentName?: string;
}
