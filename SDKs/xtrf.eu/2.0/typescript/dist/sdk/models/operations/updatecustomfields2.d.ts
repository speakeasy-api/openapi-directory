import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomFields2Request extends SpeakeasyBase {
    /**
     * Updated custom fields of a given user.
     */
    requestBody: shared.CustomFieldDTO[];
    /**
     * user's internal identifier
     */
    userId: number;
}
export declare class UpdateCustomFields2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
