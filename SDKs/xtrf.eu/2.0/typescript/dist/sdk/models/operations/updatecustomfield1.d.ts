import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomField1Request extends SpeakeasyBase {
    /**
     * Updated custom fields of a given user.
     */
    customFieldDTO: shared.CustomFieldDTO;
    /**
     * custom field's key
     */
    customFieldKey: string;
    /**
     * user's internal identifier
     */
    userId: number;
}
export declare class UpdateCustomField1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldDTO?: shared.CustomFieldDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
