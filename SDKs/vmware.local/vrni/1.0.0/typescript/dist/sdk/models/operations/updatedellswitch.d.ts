import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateDellSwitchRequest extends SpeakeasyBase {
    dellSwitchDataSource?: shared.DellSwitchDataSource;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateDellSwitchResponse extends SpeakeasyBase {
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
