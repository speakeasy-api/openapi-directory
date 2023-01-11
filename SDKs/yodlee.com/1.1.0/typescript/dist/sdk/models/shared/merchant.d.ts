import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { Contact } from "./contact";
import { Coordinates } from "./coordinates";
export declare enum MerchantSourceEnum {
    Yodlee = "YODLEE",
    Factual = "FACTUAL"
}
export declare class Merchant extends SpeakeasyBase {
    address?: AccountAddress;
    categoryLabel?: string[];
    contact?: Contact;
    coordinates?: Coordinates;
    id?: string;
    name?: string;
    source?: MerchantSourceEnum;
    website?: string;
}
