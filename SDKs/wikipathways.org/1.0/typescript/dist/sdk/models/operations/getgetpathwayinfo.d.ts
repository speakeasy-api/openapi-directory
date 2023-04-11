import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetGetPathwayInfoFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayInfoRequest extends SpeakeasyBase {
    format?: GetGetPathwayInfoFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
}
export declare class GetGetPathwayInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
