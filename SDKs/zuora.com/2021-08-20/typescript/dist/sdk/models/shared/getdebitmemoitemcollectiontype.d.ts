import { SpeakeasyBase } from "../../../internal/utils";
import { GETDebitMemoItemTypewithSuccess } from "./getdebitmemoitemtypewithsuccess";
export declare class GETDebitMemoItemCollectionType extends SpeakeasyBase {
    /**
     * Container for debit memo items.
     *
     * @remarks
     *
     */
    items?: GETDebitMemoItemTypewithSuccess[];
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
