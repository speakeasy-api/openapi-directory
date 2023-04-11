import { SpeakeasyBase } from "../../../internal/utils";
import { GETCreditMemoItemPartTypewithSuccess } from "./getcreditmemoitemparttypewithsuccess";
export declare class GETCreditMemoItemPartsCollectionType extends SpeakeasyBase {
    /**
     * Container for credit memo part items.
     *
     * @remarks
     *
     */
    itemParts?: GETCreditMemoItemPartTypewithSuccess[];
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
