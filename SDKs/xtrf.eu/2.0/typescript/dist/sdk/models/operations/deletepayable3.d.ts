import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePayable3Request extends SpeakeasyBase {
    /**
     * payable's internal identifier
     */
    payableId: number;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class DeletePayable3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
