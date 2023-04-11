import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetUserByOrcidFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetUserByOrcidRequest extends SpeakeasyBase {
    format?: GetGetUserByOrcidFormatEnum;
    /**
     * string
     */
    orcid: string;
}
export declare class GetGetUserByOrcidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
