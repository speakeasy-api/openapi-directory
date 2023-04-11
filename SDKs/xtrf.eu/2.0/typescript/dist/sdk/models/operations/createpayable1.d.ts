import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayable1Request extends SpeakeasyBase {
    /**
     * Adds a payable.
     */
    payableCreateDTO: shared.PayableCreateDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class CreatePayable1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payableDTO?: shared.PayableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
