import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnsubscribeRequest extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class UnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
