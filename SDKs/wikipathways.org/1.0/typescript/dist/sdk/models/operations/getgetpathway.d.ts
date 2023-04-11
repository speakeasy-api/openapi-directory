import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayRequest extends SpeakeasyBase {
    format?: GetGetPathwayFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The revision number of the pathway (use 0 for most recent)
     */
    revision?: number;
}
export declare class GetGetPathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
