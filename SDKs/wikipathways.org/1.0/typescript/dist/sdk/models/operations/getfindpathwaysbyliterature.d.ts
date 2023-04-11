import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetFindPathwaysByLiteratureFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindPathwaysByLiteratureRequest extends SpeakeasyBase {
    format?: GetFindPathwaysByLiteratureFormatEnum;
    /**
     * The query, can be a pubmed id, author name or title keyword.
     */
    query: string;
}
export declare class GetFindPathwaysByLiteratureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
