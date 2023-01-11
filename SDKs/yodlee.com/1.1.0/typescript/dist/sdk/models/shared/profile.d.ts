import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Email } from "./email";
import { Identifier } from "./identifier";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
export declare class Profile extends SpeakeasyBase {
    address?: AccountAddress[];
    email?: Email[];
    gender?: string;
    identifier?: Identifier[];
    name?: Name;
    phoneNumber?: PhoneNumber[];
}
