import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetFindPathwaysByXrefFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindPathwaysByXrefRequest extends SpeakeasyBase {
    /**
     * string
     */
    codes?: any[];
    format?: GetFindPathwaysByXrefFormatEnum;
    /**
     * string
     */
    ids: any[];
}
export declare class GetFindPathwaysByXrefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
