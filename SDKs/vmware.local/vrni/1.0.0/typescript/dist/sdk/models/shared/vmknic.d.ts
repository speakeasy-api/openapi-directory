import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { Vlan } from "./vlan";
/**
 * OK
 */
export declare class Vmknic extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    host?: Reference;
    ipAddresses?: IpV4Address[];
    layer2Network?: Reference;
    name?: string;
    vlan?: Vlan;
}
