import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Email } from "./email";
import { Identifier } from "./identifier";
import { PhoneNumber } from "./phonenumber";
export declare class AccountProfile extends SpeakeasyBase {
    address?: AccountAddress[];
    email?: Email[];
    identifier?: Identifier[];
    phoneNumber?: PhoneNumber[];
}
