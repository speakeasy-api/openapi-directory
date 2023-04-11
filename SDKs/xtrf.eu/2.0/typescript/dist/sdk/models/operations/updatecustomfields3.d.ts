import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomFields3Request extends SpeakeasyBase {
    /**
     * Updated custom fields of a given project.
     */
    requestBody: shared.CustomFieldDTO[];
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateCustomFields3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
