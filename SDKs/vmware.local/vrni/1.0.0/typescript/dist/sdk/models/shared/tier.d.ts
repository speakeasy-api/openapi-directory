import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { GroupMembershipCriteria } from "./groupmembershipcriteria";
import { Reference } from "./reference";
/**
 * OK
 */
export declare class Tier extends SpeakeasyBase {
    application?: Reference;
    entityId?: string;
    entityType?: EntityTypeEnum;
    groupMembershipCriteria?: GroupMembershipCriteria[];
    name?: string;
}
