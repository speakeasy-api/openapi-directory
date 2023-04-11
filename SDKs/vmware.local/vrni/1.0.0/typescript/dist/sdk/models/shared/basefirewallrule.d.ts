import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { FirewallActionEnum } from "./firewallactionenum";
import { PortRange } from "./portrange";
import { Reference } from "./reference";
/**
 * OK
 */
export declare class BaseFirewallRule extends SpeakeasyBase {
    action?: FirewallActionEnum;
    destinationAny?: boolean;
    destinationInversion?: boolean;
    destinations?: Reference[];
    disabled?: boolean;
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    portRanges?: PortRange[];
    ruleId?: string;
    sectionId?: string;
    sectionName?: string;
    sequenceNumber?: number;
    serviceAny?: boolean;
    services?: Reference[];
    sourceAny?: boolean;
    sourceInversion?: boolean;
    sources?: Reference[];
}
