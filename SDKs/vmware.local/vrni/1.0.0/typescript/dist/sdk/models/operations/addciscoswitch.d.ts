import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddCiscoSwitchResponse extends SpeakeasyBase {
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
