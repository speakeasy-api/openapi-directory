import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVendorInstructions1Request extends SpeakeasyBase {
    /**
     * Updated instructions for all vendors performing the jobs in a quote.
     */
    stringDTO: shared.StringDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateVendorInstructions1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
