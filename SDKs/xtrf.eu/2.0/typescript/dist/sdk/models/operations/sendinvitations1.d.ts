import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendInvitations1Request extends SpeakeasyBase {
    /**
     * provider's internal identifier
     */
    providerId: number;
}
export declare class SendInvitations1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    invitationStatisticsDTO?: shared.InvitationStatisticsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
