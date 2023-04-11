import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomFields5Request extends SpeakeasyBase {
    /**
     * Updated custom fields
     */
    requestBody: shared.CustomFieldDTO[];
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class UpdateCustomFields5Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
