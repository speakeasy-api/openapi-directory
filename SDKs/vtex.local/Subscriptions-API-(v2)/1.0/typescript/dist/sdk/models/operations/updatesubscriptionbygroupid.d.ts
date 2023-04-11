import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSubscriptionbygroupIdRequest extends SpeakeasyBase {
    updateSubscriptionbygroupIdRequest: shared.UpdateSubscriptionbygroupIdRequest;
    /**
     * Group ID.
     */
    groupId: string;
}
export declare class UpdateSubscriptionbygroupIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
