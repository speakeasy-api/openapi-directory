import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomFieldsRequest extends SpeakeasyBase {
    /**
     * Updated custom fields of a given person.
     */
    requestBody: shared.CustomFieldDTO[];
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class UpdateCustomFieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
