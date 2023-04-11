import { SpeakeasyBase } from "../../../internal/utils";
import { AddressWithTimeZone } from "./addresswithtimezone";
export declare class Location extends SpeakeasyBase {
    address?: AddressWithTimeZone;
    /**
     * Unique identifier of the location
     */
    id?: number;
    /**
     * Name of the location
     */
    name?: string;
}
