import { SpeakeasyBase } from "../../../internal/utils";
import { GETTaxationItemTypewithSuccess } from "./gettaxationitemtypewithsuccess";
export declare class GETTaxationItemListType extends SpeakeasyBase {
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
    /**
     * Container for taxation items.
     *
     * @remarks
     *
     */
    taxationItems?: GETTaxationItemTypewithSuccess[];
}
