import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBrocadeSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetBrocadeSwitchSnmpConfigRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetBrocadeSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    snmpConfig?: shared.SNMPConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
