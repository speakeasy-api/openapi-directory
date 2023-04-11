import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTDecryptResponseType extends SpeakeasyBase {
    /**
     * The string of a list of the following items: Payment Pages 2.0 URL, tenant ID, timestamp,the Payment Page ID
     *
     * @remarks
     *
     * The items are separated by '#', e.g., "/apps/publichostedpagelite.do#12271#rvBp1AxBJwk6FrT7aqFuABIINiRbwJCc
     * #1418848373103#2c92c0f948f899"
     *
     */
    decryptedSignature?: string;
    /**
     * The public key passed in as a request parameter.
     *
     * @remarks
     *
     */
    publicKey?: string;
    /**
     * The signature passed in as a request parameter.
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
}
