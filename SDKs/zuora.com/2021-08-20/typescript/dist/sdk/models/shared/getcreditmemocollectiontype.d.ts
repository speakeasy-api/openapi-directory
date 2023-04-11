import { SpeakeasyBase } from "../../../internal/utils";
import { GETCreditMemoTypewithSuccess } from "./getcreditmemotypewithsuccess";
export declare class GETCreditMemoCollectionType extends SpeakeasyBase {
    /**
     * Container for credit memos.
     *
     * @remarks
     *
     */
    creditmemos?: GETCreditMemoTypewithSuccess[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
