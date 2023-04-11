import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { RuleSet } from "./ruleset";
/**
 * OK
 */
export declare class BaseSecurityGroup extends SpeakeasyBase {
    directDestinationRules?: RuleSet[];
    directMembers?: Reference[];
    directSourceRules?: RuleSet[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    excludedMembers?: Reference[];
    indirectDestinationRules?: RuleSet[];
    indirectSourceRules?: RuleSet[];
    members?: Reference[];
    name?: string;
    parents?: Reference[];
    translatedVmCount?: number;
    vendorId?: string;
}
