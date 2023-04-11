import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HookConfigurationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    hookConfigurationRequest: shared.HookConfigurationRequest;
}
export declare class HookConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    hookConfiguration?: shared.HookConfiguration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
