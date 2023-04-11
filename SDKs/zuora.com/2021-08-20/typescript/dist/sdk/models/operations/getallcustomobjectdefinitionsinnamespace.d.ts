import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * If you set `select` to `type`, the response will only contain the `type` of each custom object.
 *
 * @remarks
 *
 */
export declare enum GETAllCustomObjectDefinitionsInNamespaceSelectEnum {
    Type = "type"
}
export declare class GETAllCustomObjectDefinitionsInNamespaceRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     */
    authorization: string;
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
     * API version that determines the response schema. The default version is used if this parameter is not included. Specify `Zuora-Version` in the request header if you expect a specific response schema.
     */
    zuoraVersion?: Date;
    /**
     * If you set `select` to `type`, the response will only contain the `type` of each custom object.
     *
     * @remarks
     *
     */
    select?: GETAllCustomObjectDefinitionsInNamespaceSelectEnum;
}
export declare class GETAllCustomObjectDefinitionsInNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getAllCustomObjectDefinitionsInNamespaceResponse?: shared.GETAllCustomObjectDefinitionsInNamespaceResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
