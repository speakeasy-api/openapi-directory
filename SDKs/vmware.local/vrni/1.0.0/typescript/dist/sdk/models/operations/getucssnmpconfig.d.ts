import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUcsSnmpConfigSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetUcsSnmpConfigRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetUcsSnmpConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    snmpConfig?: shared.SNMPConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
