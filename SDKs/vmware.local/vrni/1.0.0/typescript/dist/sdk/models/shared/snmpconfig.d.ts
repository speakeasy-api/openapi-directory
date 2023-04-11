import { SpeakeasyBase } from "../../../internal/utils";
import { Snmp2cConfig } from "./snmp2cconfig";
import { Snmp3Config } from "./snmp3config";
export declare enum SNMPConfigSNMPVersionEnum {
    V2c = "v2c",
    V3 = "v3"
}
/**
 * OK
 */
export declare class SNMPConfig extends SpeakeasyBase {
    configSnmp2c?: Snmp2cConfig;
    configSnmp3?: Snmp3Config;
    snmpEnabled?: boolean;
    snmpVersion?: SNMPConfigSNMPVersionEnum;
}
