import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomFieldRequest extends SpeakeasyBase {
    /**
     * Updated custom field of a given client.
     */
    customFieldDTO: shared.CustomFieldDTO;
    /**
     * custom field's key
     */
    customFieldKey: string;
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class UpdateCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldDTO?: shared.CustomFieldDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
