import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddBatchWebinarRegistrantsSecurity extends SpeakeasyBase {
    bearer?: string;
    oAuth?: string;
}
export declare class AddBatchWebinarRegistrantsApplicationJSONRegistrants extends SpeakeasyBase {
    /**
     * Email address of the registrant.
     */
    email: string;
    /**
     * First name of the registrant.
     */
    firstName: string;
    /**
     * Last name of the registrant.
     */
    lastName?: string;
}
export declare class AddBatchWebinarRegistrantsApplicationJSON extends SpeakeasyBase {
    /**
     * If a meeting was scheduled with approval_type `1` (manual approval), but you would like to automatically approve the registrants that are added via this API, you can set the value of this field to `true`.
     *
     * @remarks
     *
     * You **cannot** use this field to change approval setting for a meeting  that was originally scheduled with approval_type `0` (automatic approval).
     */
    autoApprove?: boolean;
    registrants?: AddBatchWebinarRegistrantsApplicationJSONRegistrants[];
}
export declare class AddBatchWebinarRegistrantsRequest extends SpeakeasyBase {
    requestBody?: AddBatchWebinarRegistrantsApplicationJSON;
    /**
     * Unique identifier of the webinar.
     */
    webinarId: string;
}
export declare class AddBatchWebinarRegistrants200ApplicationXMLRegistrants extends SpeakeasyBase {
    /**
     * Email address of the registrant.
     */
    email?: string;
    /**
     * Unique URL using which registrant can join the webinar.
     */
    joinUrl?: string;
    /**
     * Unique identifier of the registrant.
     */
    registrantId?: string;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * Registrants added.
 */
export declare class AddBatchWebinarRegistrants200ApplicationXML extends SpeakeasyBase {
    registrants?: AddBatchWebinarRegistrants200ApplicationXMLRegistrants[];
}
export declare class AddBatchWebinarRegistrants200ApplicationJSONRegistrants extends SpeakeasyBase {
    /**
     * Email address of the registrant.
     */
    email?: string;
    /**
     * Unique URL using which registrant can join the webinar.
     */
    joinUrl?: string;
    /**
     * Unique identifier of the registrant.
     */
    registrantId?: string;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * Registrants added.
 */
export declare class AddBatchWebinarRegistrants200ApplicationJSON extends SpeakeasyBase {
    registrants?: AddBatchWebinarRegistrants200ApplicationJSONRegistrants[];
}
export declare class AddBatchWebinarRegistrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK** <br>
     *
     * @remarks
     * Registrants added.
     */
    addBatchWebinarRegistrants200ApplicationJSONObject?: AddBatchWebinarRegistrants200ApplicationJSON;
}
