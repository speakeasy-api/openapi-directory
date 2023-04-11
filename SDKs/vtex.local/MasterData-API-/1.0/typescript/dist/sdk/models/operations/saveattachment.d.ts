import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SaveattachmentRequestBody extends SpeakeasyBase {
    file: Uint8Array[];
}
export declare class SaveattachmentRequest extends SpeakeasyBase {
    requestBody?: SaveattachmentRequestBody;
    /**
     * Two letter word that identifies the data structure
     */
    acronym: string;
    /**
     * Field to attach the file to, as described in admin
     */
    field: string;
    /**
     * Id of the document
     */
    id: string;
}
export declare class SaveattachmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
