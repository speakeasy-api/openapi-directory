import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendRequest extends SpeakeasyBase {
    /**
     * provider invoice's internal identifier
     */
    invoiceId: number;
}
export declare class SendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
