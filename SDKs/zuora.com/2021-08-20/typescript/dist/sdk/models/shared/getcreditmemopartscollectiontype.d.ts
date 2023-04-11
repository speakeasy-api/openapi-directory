import { SpeakeasyBase } from "../../../internal/utils";
import { GETCreditMemoPartTypewithSuccess } from "./getcreditmemoparttypewithsuccess";
export declare class GETCreditMemoPartsCollectionType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Container for credit memo parts.
     *
     * @remarks
     *
     */
    parts?: GETCreditMemoPartTypewithSuccess[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
