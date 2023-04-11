import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetFindInteractionsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindInteractionsRequest extends SpeakeasyBase {
    format?: GetFindInteractionsFormatEnum;
    /**
     * The name of an entity to find interactions for (e.g. 'P53')
     */
    query: string;
}
export declare class GetFindInteractionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
