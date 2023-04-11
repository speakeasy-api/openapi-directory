import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutOrderLineItemResponseTypeReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response
     *
     * @remarks
     *
     */
    message?: string;
}
export declare class PutOrderLineItemResponseType extends SpeakeasyBase {
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: PutOrderLineItemResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
