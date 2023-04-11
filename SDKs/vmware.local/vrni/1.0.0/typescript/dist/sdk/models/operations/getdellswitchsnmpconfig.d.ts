import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDellSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetDellSwitchSnmpConfigRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetDellSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    snmpConfig?: shared.SNMPConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
