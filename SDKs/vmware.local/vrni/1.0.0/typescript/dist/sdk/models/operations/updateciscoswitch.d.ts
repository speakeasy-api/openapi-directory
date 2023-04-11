import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateCiscoSwitchRequest extends SpeakeasyBase {
    ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateCiscoSwitchResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
