import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetRecentChangesFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetRecentChangesRequest extends SpeakeasyBase {
    format?: GetGetRecentChangesFormatEnum;
    /**
     * Get the changes after this time
     */
    timestamp: string;
}
export declare class GetGetRecentChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
