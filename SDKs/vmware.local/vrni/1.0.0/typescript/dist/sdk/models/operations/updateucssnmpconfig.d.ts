import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateUcsSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateUcsSnmpConfigRequest extends SpeakeasyBase {
    snmpConfig?: shared.SNMPConfig;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateUcsSnmpConfigResponse extends SpeakeasyBase {
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
