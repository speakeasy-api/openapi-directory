import { SpeakeasyBase } from "../../../internal/utils";
import { DellSwitchTypeEnum } from "./dellswitchtypeenum";
import { PasswordCredentials } from "./passwordcredentials";
export declare class DellSwitchDataSourceRequest extends SpeakeasyBase {
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
    switchType?: DellSwitchTypeEnum;
}
