import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddPanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddPanoramaFirewallResponse extends SpeakeasyBase {
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
