import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendRemindersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sendRemindersResponseDTO?: shared.SendRemindersResponseDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
