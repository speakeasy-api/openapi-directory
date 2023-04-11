import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePayable1Request extends SpeakeasyBase {
    /**
     * payable's internal identifier
     */
    payableId: number;
    /**
     * quoteId's internal identifier
     */
    quoteId: string;
}
export declare class DeletePayable1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
