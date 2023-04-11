import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTHMACSignatureResponseType extends SpeakeasyBase {
    /**
     * Contains a keyed-hash message authentication code (HMAC)
     *
     * @remarks
     * e.g. `ZmI0ZjE2ZTMxMWY1YjA0ZTc4MTg1ZDhlYWRkMTEwNDE3M2RiMzNiNQ==<`
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
     * Contains a token code. e.g. `gCH6gYqQffQCsFKSLuxyagXsuXcIK0uf`
     *
     * @remarks
     *
     */
    token?: string;
}
