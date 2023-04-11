import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTHMACSignatureType extends SpeakeasyBase {
    /**
     * Customer account number or ID.
     *
     * @remarks
     *
     * Specifies this field only when creating signatures for Create payment method.
     *
     */
    accountKey?: string;
    /**
     * Possible values are: 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'.
     *
     * @remarks
     *
     */
    method: string;
    /**
     * Account name.
     *
     * @remarks
     *
     * Specifies this field only when creating signatures for Create account.
     *
     */
    name?: string;
    /**
     * The page id of your Payment Pages 2.0 form. Click **Show Page Id** next to the Payment Page name in the Hosted Page List to retrieve the page id.
     *
     * @remarks
     *
     * Specifies this field only when creating signatures for RSA Signatures.
     *
     */
    pageId?: string;
    /**
     * The URI of the API object the customer will make a CORS enabled call to.
     *
     * @remarks
     * e.g. "https://rest.zuora.com/v1/payment-methods/credit-cards"
     *
     */
    uri: string;
}
