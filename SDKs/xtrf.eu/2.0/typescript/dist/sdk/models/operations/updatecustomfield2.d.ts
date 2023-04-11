import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomField2Request extends SpeakeasyBase {
    /**
     * Updated custom field with a specified key in a project.
     */
    smartCustomFieldDTO: shared.SmartCustomFieldDTO;
    /**
     * custom field's key
     */
    key: string;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateCustomField2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
