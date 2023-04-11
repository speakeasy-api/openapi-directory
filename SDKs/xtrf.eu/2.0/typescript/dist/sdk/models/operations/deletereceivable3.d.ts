import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReceivable3Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
    /**
     * receivable's internal identifier
     */
    receivableId: number;
}
export declare class DeleteReceivable3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
