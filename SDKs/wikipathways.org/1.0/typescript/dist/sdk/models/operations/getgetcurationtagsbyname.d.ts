import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetCurationTagsByNameFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetCurationTagsByNameRequest extends SpeakeasyBase {
    format?: GetGetCurationTagsByNameFormatEnum;
    /**
     * The tag name
     */
    tagName: string;
}
export declare class GetGetCurationTagsByNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
