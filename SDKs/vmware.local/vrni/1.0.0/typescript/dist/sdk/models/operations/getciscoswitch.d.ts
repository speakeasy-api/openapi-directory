import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetCiscoSwitchRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetCiscoSwitchResponse extends SpeakeasyBase {
    /**
     * OK
     */
    ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
