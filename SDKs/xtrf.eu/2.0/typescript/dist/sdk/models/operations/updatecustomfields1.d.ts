import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomFields1Request extends SpeakeasyBase {
    /**
     * Updated custom fields of a given client.
     */
    requestBody: shared.CustomFieldDTO[];
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class UpdateCustomFields1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
