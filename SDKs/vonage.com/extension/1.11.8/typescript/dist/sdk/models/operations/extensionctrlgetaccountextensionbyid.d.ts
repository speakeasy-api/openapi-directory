import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtensionCtrlGetAccountExtensionByIDSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExtensionCtrlGetAccountExtensionByIDRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: string;
    /**
     * The extension number
     */
    extensionNumber: number;
}
export declare class ExtensionCtrlGetAccountExtensionByIDResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    endUserRouteHalResponse?: shared.EndUserRouteHalResponse;
    /**
     * Extension not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
