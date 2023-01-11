import { SpeakeasyBase } from "../../../internal/utils";
import { UserAddress } from "./useraddress";
import { Name } from "./name";
import { UserRequestPreferences } from "./userrequestpreferences";
export declare class UserRegistration extends SpeakeasyBase {
    address?: UserAddress;
    email?: string;
    loginName: string;
    name?: Name;
    preferences?: UserRequestPreferences;
    segmentName?: string;
}
