import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBrocadeSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateBrocadeSwitchRequest extends SpeakeasyBase {
    switchDataSource?: shared.SwitchDataSource;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateBrocadeSwitchResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    switchDataSource?: shared.SwitchDataSource;
}
