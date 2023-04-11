import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetListPathwaysFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetListPathwaysRequest extends SpeakeasyBase {
    format?: GetListPathwaysFormatEnum;
    /**
     * The organism to filter by (optional)
     */
    organism?: string;
}
export declare class GetListPathwaysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
