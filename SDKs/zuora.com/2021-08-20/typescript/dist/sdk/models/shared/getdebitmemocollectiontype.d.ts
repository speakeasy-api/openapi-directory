import { SpeakeasyBase } from "../../../internal/utils";
import { GETDebitMemoTypewithSuccess } from "./getdebitmemotypewithsuccess";
export declare class GETDebitMemoCollectionType extends SpeakeasyBase {
    /**
     * Container for debit memos.
     *
     * @remarks
     *
     */
    debitmemos?: GETDebitMemoTypewithSuccess[];
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
