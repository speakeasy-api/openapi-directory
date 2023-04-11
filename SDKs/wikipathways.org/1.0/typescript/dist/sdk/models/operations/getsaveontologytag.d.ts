import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetSaveOntologyTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetSaveOntologyTagRequest extends SpeakeasyBase {
    /**
     * The authentication key
     */
    auth: string;
    format?: GetSaveOntologyTagFormatEnum;
    /**
     * The pathway identifier
     */
    pwId: string;
    /**
     * The ontology term to apply
     */
    term: string;
    /**
     * The identifier of the term in the ontology
     */
    termId: string;
    /**
     * The username
     */
    user: string;
}
export declare class GetSaveOntologyTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
