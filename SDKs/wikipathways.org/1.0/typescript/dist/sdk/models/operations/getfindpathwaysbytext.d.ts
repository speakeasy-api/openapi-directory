import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetFindPathwaysByTextFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindPathwaysByTextRequest extends SpeakeasyBase {
    format?: GetFindPathwaysByTextFormatEnum;
    /**
     * The query, e.g. 'apoptosis'
     */
    query: string;
    /**
     * Optional, limit the query by species. Leave
     */
    species?: string;
}
export declare class GetFindPathwaysByTextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
