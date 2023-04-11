import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpAddressRange } from "./ipaddressrange";
import { IpNumericRange } from "./ipnumericrange";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { RuleSet } from "./ruleset";
/**
 * OK
 */
export declare class BaseIPSet extends SpeakeasyBase {
    directDestinationRules?: RuleSet[];
    directSourceRules?: RuleSet[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    indirectDestinationRules?: RuleSet[];
    indirectSourceRules?: RuleSet[];
    ipAddresses?: IpV4Address[];
    ipNumericRanges?: IpNumericRange[];
    ipRanges?: IpAddressRange[];
    name?: string;
    parentSecurityGroups?: Reference[];
    translatedVmCount?: number;
    vendor?: string;
    vendorId?: string;
}
