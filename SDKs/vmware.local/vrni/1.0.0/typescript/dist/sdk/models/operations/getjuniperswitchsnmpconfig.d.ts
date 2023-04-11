import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJuniperSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetJuniperSwitchSnmpConfigRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetJuniperSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    snmpConfig?: shared.SNMPConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
