import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetCurationTagsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetCurationTagsRequest extends SpeakeasyBase {
    format?: GetGetCurationTagsFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
}
export declare class GetGetCurationTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
