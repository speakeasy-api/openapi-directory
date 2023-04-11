import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete7Request extends SpeakeasyBase {
    /**
     * provider payment's internal identifier
     */
    paymentId: number;
}
export declare class Delete7Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
