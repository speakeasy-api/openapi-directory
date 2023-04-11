import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { PasswordCredentials } from "./passwordcredentials";
/**
 * Success
 */
export declare class NSXVManagerDataSource extends SpeakeasyBase {
    centralCliEnabled?: boolean;
    credentials?: PasswordCredentials;
    enabled?: boolean;
    entityId?: string;
    entityType?: DataSourceTypeEnum;
    fqdn?: string;
    ip?: string;
    ipfixEnabled?: boolean;
    nickname?: string;
    notes?: string;
    /**
     * proxy vm which should register this vcenter
     */
    proxyId?: string;
    /**
     * Associated vcenter data source entity Id
     */
    vcenterId?: string;
}
