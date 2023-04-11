import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePayable1Request extends SpeakeasyBase {
    /**
     * Updates a payable.
     */
    payableDTO: shared.PayableDTO;
    /**
     * payable's internal identifier
     */
    payableId: number;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdatePayable1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payableDTO?: shared.PayableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
