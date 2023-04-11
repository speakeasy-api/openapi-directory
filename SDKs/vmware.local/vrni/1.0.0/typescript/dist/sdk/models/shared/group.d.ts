import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
/**
 * OK
 */
export declare class Group extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    members?: Reference[];
    name?: string;
}
