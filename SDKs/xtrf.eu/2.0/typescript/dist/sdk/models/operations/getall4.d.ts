import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAll4Response extends SpeakeasyBase {
    /**
     * Success
     */
    activeSubscriptionDTOS?: shared.ActiveSubscriptionDTO[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
