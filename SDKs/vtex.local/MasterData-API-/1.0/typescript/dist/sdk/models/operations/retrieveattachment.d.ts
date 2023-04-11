import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RetrieveattachmentRequest extends SpeakeasyBase {
    /**
     * Two letter word that identifies the data structure
     */
    acronym: string;
    /**
     * Field to attach the file to, as described in admin
     */
    field: string;
    fileName: string;
    /**
     * Id of the document
     */
    id: string;
}
export declare class RetrieveattachmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
