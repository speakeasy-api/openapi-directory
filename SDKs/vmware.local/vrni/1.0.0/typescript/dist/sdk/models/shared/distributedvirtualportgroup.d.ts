import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
/**
 * OK
 */
export declare class DistributedVirtualPortgroup extends SpeakeasyBase {
    distributedVirtualSwitch?: Reference;
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    vcenterManager?: Reference;
    vendorId?: string;
}
