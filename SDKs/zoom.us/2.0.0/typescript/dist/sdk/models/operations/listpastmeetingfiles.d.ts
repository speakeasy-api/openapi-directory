import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPastMeetingFilesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListPastMeetingFilesRequest extends SpeakeasyBase {
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
export declare class ListPastMeetingFiles200ApplicationXMLInMeetingFiles extends SpeakeasyBase {
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
export declare class ListPastMeetingFiles200ApplicationXML extends SpeakeasyBase {
    inMeetingFiles?: ListPastMeetingFiles200ApplicationXMLInMeetingFiles[];
    /**
     * The total number of files found.
     */
    totalRecords?: number;
}
export declare class ListPastMeetingFiles200ApplicationJSONInMeetingFiles extends SpeakeasyBase {
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
export declare class ListPastMeetingFiles200ApplicationJSON extends SpeakeasyBase {
    inMeetingFiles?: ListPastMeetingFiles200ApplicationJSONInMeetingFiles[];
    /**
     * The total number of files found.
     */
    totalRecords?: number;
}
export declare class ListPastMeetingFilesResponse extends SpeakeasyBase {
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
    listPastMeetingFiles200ApplicationJSONObject?: ListPastMeetingFiles200ApplicationJSON;
}
