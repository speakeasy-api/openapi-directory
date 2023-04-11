import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { PasswordCredentials } from "./passwordcredentials";
/**
 * OK
 */
export declare class SwitchDataSource extends SpeakeasyBase {
    credentials?: PasswordCredentials;
    enabled?: boolean;
    entityId?: string;
    entityType?: DataSourceTypeEnum;
    fqdn?: string;
    ip?: string;
    nickname?: string;
    notes?: string;
    /**
     * proxy vm which should register this vcenter
     */
    proxyId?: string;
}
