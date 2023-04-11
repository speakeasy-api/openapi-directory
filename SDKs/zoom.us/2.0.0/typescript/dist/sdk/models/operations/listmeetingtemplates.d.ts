import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListMeetingTemplatesRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the user. Retrieve the value of this field by calling the [List users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users) API.
     */
    userId: string;
}
export declare class ListMeetingTemplates200ApplicationXMLTemplates extends SpeakeasyBase {
    /**
     * Unique identifier of the template.
     */
    id?: string;
    /**
     * Name of the template.
     */
    name?: string;
    /**
     * Type of the template. The value of this field can be one of the following:<br>
     *
     * @remarks
     * `1`: meeting template <br>
     * `2`: admin meeting template
     */
    type?: number;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 */
export declare class ListMeetingTemplates200ApplicationXML extends SpeakeasyBase {
    templates?: ListMeetingTemplates200ApplicationXMLTemplates[];
    /**
     * Total records found for this request.
     */
    totalRecords?: number;
}
export declare class ListMeetingTemplates200ApplicationJSONTemplates extends SpeakeasyBase {
    /**
     * Unique identifier of the template.
     */
    id?: string;
    /**
     * Name of the template.
     */
    name?: string;
    /**
     * Type of the template. The value of this field can be one of the following:<br>
     *
     * @remarks
     * `1`: meeting template <br>
     * `2`: admin meeting template
     */
    type?: number;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 */
export declare class ListMeetingTemplates200ApplicationJSON extends SpeakeasyBase {
    templates?: ListMeetingTemplates200ApplicationJSONTemplates[];
    /**
     * Total records found for this request.
     */
    totalRecords?: number;
}
export declare class ListMeetingTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK** <br>
     */
    listMeetingTemplates200ApplicationJSONObject?: ListMeetingTemplates200ApplicationJSON;
}
