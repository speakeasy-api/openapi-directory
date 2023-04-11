import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomFields2Request extends SpeakeasyBase {
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class GetCustomFields2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customFieldsDTO?: shared.CustomFieldDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
