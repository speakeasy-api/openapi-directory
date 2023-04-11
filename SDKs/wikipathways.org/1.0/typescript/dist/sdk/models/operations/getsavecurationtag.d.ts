import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetSaveCurationTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetSaveCurationTagRequest extends SpeakeasyBase {
    /**
     * The authentication key
     */
    auth: string;
    format?: GetSaveCurationTagFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The revision this tag applies to
     */
    revision: number;
    /**
     * The name of the tag to apply
     */
    tagName: string;
    /**
     * string
     */
    text: string;
    /**
     * The user name
     */
    username: string;
}
export declare class GetSaveCurationTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
