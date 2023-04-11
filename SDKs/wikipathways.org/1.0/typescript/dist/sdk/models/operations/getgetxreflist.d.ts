import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetXrefListFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetXrefListRequest extends SpeakeasyBase {
    /**
     * The database code to translate to (e.g. 'S' for UniProt).
     */
    code: string;
    format?: GetGetXrefListFormatEnum;
    /**
     * The pathway identifier.
     */
    pwId: string;
}
export declare class GetGetXrefListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
