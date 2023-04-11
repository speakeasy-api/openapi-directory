import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
/**
 * Add a cisco switch as datasource
 */
export declare class SwitchDataSourceRequest extends SpeakeasyBase {
    credentials?: PasswordCredentials;
    enabled?: boolean;
    fqdn?: string;
    ip?: string;
    nickname: string;
    notes?: string;
    /**
     * proxy vm which should register this vcenter
     */
    proxyId: string;
}
