import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendInvitationsRequest extends SpeakeasyBase {
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class SendInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    invitationStatisticsDTO?: shared.InvitationStatisticsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
