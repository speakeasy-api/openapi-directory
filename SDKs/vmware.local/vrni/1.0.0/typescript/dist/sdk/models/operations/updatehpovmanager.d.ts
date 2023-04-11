import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateHpovManagerRequest extends SpeakeasyBase {
    switchDataSource?: shared.SwitchDataSource;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateHpovManagerResponse extends SpeakeasyBase {
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
