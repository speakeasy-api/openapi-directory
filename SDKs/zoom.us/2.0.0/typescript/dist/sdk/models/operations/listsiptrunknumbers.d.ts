import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSipTrunkNumbers200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    /**
     * Country ID (example: US)
     */
    country?: string;
    /**
     * Phone number
     */
    number?: string;
}
/**
 * * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of numbers returned.
 */
export declare class ListSipTrunkNumbers200ApplicationXML extends SpeakeasyBase {
    phoneNumbers?: ListSipTrunkNumbers200ApplicationXMLPhoneNumbers[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListSipTrunkNumbers200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Country ID (example: US)
     */
    country?: string;
    /**
     * Phone number
     */
    number?: string;
}
/**
 * * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of numbers returned.
 */
export declare class ListSipTrunkNumbers200ApplicationJSON extends SpeakeasyBase {
    phoneNumbers?: ListSipTrunkNumbers200ApplicationJSONPhoneNumbers[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListSipTrunkNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * List of numbers returned.
     */
    listSipTrunkNumbers200ApplicationJSONObject?: ListSipTrunkNumbers200ApplicationJSON;
}
