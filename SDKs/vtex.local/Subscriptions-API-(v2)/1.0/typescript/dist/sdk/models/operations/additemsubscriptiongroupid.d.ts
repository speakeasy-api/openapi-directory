import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdditemsubscriptionGroupIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    additemsubscriptionGroupIdRequest: shared.AdditemsubscriptionGroupIdRequest;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Group ID.
     */
    groupId: string;
}
export declare class AdditemsubscriptionGroupIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
