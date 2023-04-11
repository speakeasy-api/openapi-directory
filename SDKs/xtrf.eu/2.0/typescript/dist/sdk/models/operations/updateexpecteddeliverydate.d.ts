import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateExpectedDeliveryDateRequest extends SpeakeasyBase {
    /**
     * Updated Expected Delivery Date for a quote.
     */
    timeDTO: shared.TimeDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateExpectedDeliveryDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
