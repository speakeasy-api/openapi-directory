import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateorupdateentiredocumentRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    requestBody: Record<string, any>;
    /**
     * Identifies the kind of data
     */
    acronym: string;
}
export declare class CreateorupdateentiredocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
