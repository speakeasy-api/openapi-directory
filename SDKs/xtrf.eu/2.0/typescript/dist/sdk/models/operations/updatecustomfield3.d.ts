import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomField3Request extends SpeakeasyBase {
    /**
     * Updated custom field with a specified key in a quote.
     */
    smartCustomFieldDTO: shared.SmartCustomFieldDTO;
    /**
     * custom field's key
     */
    key: string;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateCustomField3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
