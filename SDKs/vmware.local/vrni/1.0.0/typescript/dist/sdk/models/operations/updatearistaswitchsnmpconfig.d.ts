import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAristaSwitchSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateAristaSwitchSnmpConfigRequest extends SpeakeasyBase {
    snmpConfig?: shared.SNMPConfig;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateAristaSwitchSnmpConfigResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    snmpConfig?: shared.SNMPConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
