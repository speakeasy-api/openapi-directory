import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete2Request extends SpeakeasyBase {
    /**
     * customer payment's internal identifier
     */
    paymentId: number;
}
export declare class Delete2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
