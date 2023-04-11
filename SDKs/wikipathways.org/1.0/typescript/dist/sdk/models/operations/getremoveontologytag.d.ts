import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetRemoveOntologyTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetRemoveOntologyTagRequest extends SpeakeasyBase {
    /**
     * The authentication key
     */
    auth: string;
    format?: GetRemoveOntologyTagFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The ontology term identifier in the ontology
     */
    termId: string;
    /**
     * The username
     */
    user: string;
}
export declare class GetRemoveOntologyTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
