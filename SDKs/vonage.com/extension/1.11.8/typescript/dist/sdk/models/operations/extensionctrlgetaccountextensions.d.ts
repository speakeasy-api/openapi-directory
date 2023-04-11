import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtensionCtrlGetAccountExtensionsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExtensionCtrlGetAccountExtensionsRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: string;
    /**
     * Filter by email address
     */
    email?: string;
    /**
     * Filter by location id
     */
    locationId?: number;
    /**
     * Filter by login name
     */
    loginName?: string;
    /**
     * Current page number
     */
    page?: number;
    /**
     * Number of records per page
     */
    pageSize?: number;
    /**
     * Filter by phone number
     */
    phoneNumber?: string;
}
export declare class ExtensionCtrlGetAccountExtensionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    endUserRouteHalResponse?: shared.EndUserRouteHalResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid parameters given
     */
    validationErrorsResponse?: shared.ValidationErrorsResponse;
}
