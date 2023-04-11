import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListWebinarTemplatesRequest extends SpeakeasyBase {
    userId: string;
}
export declare class ListWebinarTemplates200ApplicationXMLTemplates extends SpeakeasyBase {
    /**
     * Unique identifier of the template. If you would like to use this template while scheduling a webinar, you can provide the value of this field in `template_id` field of [Create a Webinar](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarcreate) API.
     */
    id?: string;
    /**
     * Name of the template.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * List of existing templates returned.
 */
export declare class ListWebinarTemplates200ApplicationXML extends SpeakeasyBase {
    templates?: ListWebinarTemplates200ApplicationXMLTemplates[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListWebinarTemplates200ApplicationJSONTemplates extends SpeakeasyBase {
    /**
     * Unique identifier of the template. If you would like to use this template while scheduling a webinar, you can provide the value of this field in `template_id` field of [Create a Webinar](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarcreate) API.
     */
    id?: string;
    /**
     * Name of the template.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * List of existing templates returned.
 */
export declare class ListWebinarTemplates200ApplicationJSON extends SpeakeasyBase {
    templates?: ListWebinarTemplates200ApplicationJSONTemplates[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListWebinarTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK** <br>
     *
     * @remarks
     * List of existing templates returned.
     */
    listWebinarTemplates200ApplicationJSONObject?: ListWebinarTemplates200ApplicationJSON;
}
