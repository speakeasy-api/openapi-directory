import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddDellSwitchResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    dellSwitchDataSource?: shared.DellSwitchDataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
