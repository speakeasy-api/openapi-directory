import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetRemoveCurationTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetRemoveCurationTagRequest extends SpeakeasyBase {
    /**
     * The authentication data
     */
    auth: string;
    format?: GetRemoveCurationTagFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The name of the tag to apply
     */
    tagName: string;
    /**
     * The user name
     */
    username: string;
}
export declare class GetRemoveCurationTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
