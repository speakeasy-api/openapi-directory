import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { RuleSet } from "./ruleset";
/**
 * OK
 */
export declare class BaseVirtualMachine extends SpeakeasyBase {
    defaultGateway?: string;
    destinationFirewallRules?: RuleSet[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    ipAddresses?: IpV4Address[];
    ipSets?: Reference[];
    name?: string;
    securityGroups?: Reference[];
    sourceFirewallRules?: RuleSet[];
    vnics?: Reference[];
}
