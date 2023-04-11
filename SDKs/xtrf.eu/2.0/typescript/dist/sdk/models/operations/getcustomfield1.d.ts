import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomField1Request extends SpeakeasyBase {
    /**
     * custom field's key
     */
    customFieldKey: string;
    /**
     * user's internal identifier
     */
    userId: number;
}
export declare class GetCustomField1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldDTO?: shared.CustomFieldDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
