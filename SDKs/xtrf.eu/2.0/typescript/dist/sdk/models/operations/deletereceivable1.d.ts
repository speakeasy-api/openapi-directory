import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReceivable1Request extends SpeakeasyBase {
    /**
     * quoteId's internal identifier
     */
    quoteId: string;
    /**
     * receivable's internal identifier
     */
    receivableId: number;
}
export declare class DeleteReceivable1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
