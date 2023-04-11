import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetPathwayHistoryFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayHistoryRequest extends SpeakeasyBase {
    format?: GetGetPathwayHistoryFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * Limit by time, only history items after the given
     */
    timestamp: string;
}
export declare class GetGetPathwayHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
