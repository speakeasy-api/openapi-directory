import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomFields4Request extends SpeakeasyBase {
    /**
     * Updated custom fields of a given quote.
     */
    requestBody: shared.CustomFieldDTO[];
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateCustomFields4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
