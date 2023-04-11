import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAristaSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetAristaSwitchSnmpConfigRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetAristaSwitchSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    snmpConfig?: shared.SNMPConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
