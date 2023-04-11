import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTRSASignatureResponseType extends SpeakeasyBase {
    /**
     * Public key generated for this Payment Page.
     *
     * @remarks
     *
     */
    key?: string;
    /**
     * Digital signature generated for this Payment Page.
     *
     * @remarks
     *
     */
    signature?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * ID of the Zuora tenant.
     *
     * @remarks
     *
     */
    tenantId?: string;
    /**
     * Token generated for this Payment Page.
     *
     * @remarks
     *
     */
    token?: string;
}
