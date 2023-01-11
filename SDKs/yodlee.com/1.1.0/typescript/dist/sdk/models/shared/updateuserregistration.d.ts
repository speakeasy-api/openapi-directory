import { SpeakeasyBase } from "../../../internal/utils";
import { UserAddress } from "./useraddress";
import { Name } from "./name";
import { UserRequestPreferences } from "./userrequestpreferences";
export declare class UpdateUserRegistration extends SpeakeasyBase {
    address?: UserAddress;
    email?: string;
    name?: Name;
    preferences?: UserRequestPreferences;
    segmentName?: string;
}
