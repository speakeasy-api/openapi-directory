import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomFieldRequest extends SpeakeasyBase {
    /**
     * custom field's key
     */
    customFieldKey: string;
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class GetCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldDTO?: shared.CustomFieldDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
