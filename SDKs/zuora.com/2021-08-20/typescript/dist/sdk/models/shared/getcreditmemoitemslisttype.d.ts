import { SpeakeasyBase } from "../../../internal/utils";
import { GETCreditMemoItemTypewithSuccess } from "./getcreditmemoitemtypewithsuccess";
export declare class GETCreditMemoItemsListType extends SpeakeasyBase {
    /**
     * Container for credit memo items.
     *
     * @remarks
     *
     */
    items?: GETCreditMemoItemTypewithSuccess[];
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
