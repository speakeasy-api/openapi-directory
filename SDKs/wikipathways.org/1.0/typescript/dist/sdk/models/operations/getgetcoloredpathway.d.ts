import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetColoredPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetColoredPathwayRequest extends SpeakeasyBase {
    /**
     * string
     */
    color: any[];
    /**
     * The image type (One of 'svg', 'pdf' or 'png').
     */
    fileType: string;
    format?: GetGetColoredPathwayFormatEnum;
    /**
     * string
     */
    graphId: any[];
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The revision of the pathway (use '0' for most recent)
     */
    revision: string;
}
export declare class GetGetColoredPathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
