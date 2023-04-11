import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ObjectPUTProductRatePlanChargeRequest extends SpeakeasyBase {
    proxyModifyProductRatePlanCharge: shared.ProxyModifyProductRatePlanCharge;
    /**
     * Zuora WSDL version number.
     *
     * @remarks
     *
     */
    xZuoraWSDLVersion?: string;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * The unique ID of the product rate plan charge to be updated. For example, 2c93808457d787030157e031fcd34e19.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * Specifies whether the call fails if the request body contains unknown fields.
     *
     * @remarks
     * With `rejectUnknownFields` set to `true`, Zuora returns a 400 response if
     * the request body contains unknown fields. The body of the 400 response is:
     *
     * ```json
     * {
     *     "message": "Error - unrecognised fields"
     * }
     * ```
     *
     * By default, Zuora ignores unknown fields in the request body.
     *
     */
    rejectUnknownFields?: boolean;
}
export declare class ObjectPUTProductRatePlanChargeResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
