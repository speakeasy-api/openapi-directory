import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetUpdatePathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetUpdatePathwayRequest extends SpeakeasyBase {
    /**
     * The authentication key
     */
    auth: string;
    /**
     * A description of the modifications
     */
    description: string;
    format?: GetUpdatePathwayFormatEnum;
    /**
     * The updated GPML code
     */
    gpml: string;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The revision the GPML code is based on
     */
    revision: number;
    /**
     * The username
     */
    username: string;
}
export declare class GetUpdatePathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
