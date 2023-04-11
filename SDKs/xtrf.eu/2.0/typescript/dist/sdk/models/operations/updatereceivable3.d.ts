import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateReceivable3Request extends SpeakeasyBase {
    receivableDTO: shared.ReceivableDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
    /**
     * receivable's internal identifier
     */
    receivableId: number;
}
export declare class UpdateReceivable3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    receivableDTO?: shared.ReceivableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
