import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Rooms location structure returned successfully.<br>
 *
 */
export declare class GetZRLocationStructure200ApplicationXML extends SpeakeasyBase {
    /**
     * Hierarchial structure array of the Zoom Rooms location.
     */
    structures?: string[];
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Rooms location structure returned successfully.<br>
 *
 */
export declare class GetZRLocationStructure200ApplicationJSON extends SpeakeasyBase {
    /**
     * Hierarchial structure array of the Zoom Rooms location.
     */
    structures?: string[];
}
export declare class GetZRLocationStructureResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Zoom Rooms location structure returned successfully.<br>
     *
     */
    getZRLocationStructure200ApplicationJSONObject?: GetZRLocationStructure200ApplicationJSON;
}
