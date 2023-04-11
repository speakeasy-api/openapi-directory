import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPastWebinarFilesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListPastWebinarFilesRequest extends SpeakeasyBase {
    webinarId: string;
}
export declare class ListPastWebinarFiles200ApplicationXMLInMeetingFiles extends SpeakeasyBase {
    /**
     * URL to download the file.
     */
    downloadUrl?: string;
    /**
     * Name of the file.
     */
    fileName?: string;
    /**
     * Size of the file in bytes.
     */
    fileSize?: number;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Files retrieved successfully.
 */
export declare class ListPastWebinarFiles200ApplicationXML extends SpeakeasyBase {
    inMeetingFiles?: ListPastWebinarFiles200ApplicationXMLInMeetingFiles[];
    /**
     * The total number of files found.
     */
    totalRecords?: number;
}
export declare class ListPastWebinarFiles200ApplicationJSONInMeetingFiles extends SpeakeasyBase {
    /**
     * URL to download the file.
     */
    downloadUrl?: string;
    /**
     * Name of the file.
     */
    fileName?: string;
    /**
     * Size of the file in bytes.
     */
    fileSize?: number;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Files retrieved successfully.
 */
export declare class ListPastWebinarFiles200ApplicationJSON extends SpeakeasyBase {
    inMeetingFiles?: ListPastWebinarFiles200ApplicationJSONInMeetingFiles[];
    /**
     * The total number of files found.
     */
    totalRecords?: number;
}
export declare class ListPastWebinarFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Files retrieved successfully.
     */
    listPastWebinarFiles200ApplicationJSONObject?: ListPastWebinarFiles200ApplicationJSON;
}
