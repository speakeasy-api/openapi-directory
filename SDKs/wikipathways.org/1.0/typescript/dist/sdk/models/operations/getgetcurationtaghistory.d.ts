import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetCurationTagHistoryFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetCurationTagHistoryRequest extends SpeakeasyBase {
    format?: GetGetCurationTagHistoryFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * Only include history from after the given date
     */
    timestamp?: string;
}
export declare class GetGetCurationTagHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
