import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyUnauthorizedResponse extends SpeakeasyBase {
    /**
     * Error message.
     *
     * @remarks
     *
     * If the error message is "Authentication error", ensure that the `Authorization` request header contains valid authentication credentials, then retry the request. See [Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication) for more information.
     *
     * If the error message is "Failed to get user info", retry the request.
     *
     */
    message?: string;
}
