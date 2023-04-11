import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostCreatePathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class PostCreatePathwayRequest extends SpeakeasyBase {
    /**
     * The authentication info
     */
    auth: string;
    format?: PostCreatePathwayFormatEnum;
    /**
     * The GPML code for the new pathway
     */
    gpml: string;
    /**
     * The user name
     */
    username: string;
}
export declare class PostCreatePathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
