import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectGroupEnum } from "./objectgroupenum";
import { ObjectTypeEnum } from "./objecttypeenum";
/**
 * A successful request
 */
export declare class Association extends SpeakeasyBase {
    /**
     * The unique identifier of the file
     */
    fileId?: string;
    /**
     * The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.
     */
    objectGroup?: ObjectGroupEnum;
    /**
     * The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID)
     */
    objectId?: string;
    /**
     * The Object Type
     */
    objectType?: ObjectTypeEnum;
}
