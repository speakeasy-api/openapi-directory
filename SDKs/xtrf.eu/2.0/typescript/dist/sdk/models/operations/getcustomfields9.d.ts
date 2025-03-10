import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomFields9Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetCustomFields9Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
