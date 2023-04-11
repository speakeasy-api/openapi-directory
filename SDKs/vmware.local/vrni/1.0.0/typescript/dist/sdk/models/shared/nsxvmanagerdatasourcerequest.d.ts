import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
export declare class NSXVManagerDataSourceRequest extends SpeakeasyBase {
    centralCliEnabled?: boolean;
    credentials: PasswordCredentials;
    enabled?: boolean;
    fqdn?: string;
    ip?: string;
    ipfixEnabled?: boolean;
    nickname: string;
    notes?: string;
    /**
     * proxy vm which should register this vcenter
     */
    proxyId: string;
    /**
     * Associated vcenter data source entity Id
     */
    vcenterId: string;
}
