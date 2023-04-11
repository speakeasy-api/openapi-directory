import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetPanoramaFirewallRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetPanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    switchDataSource?: shared.SwitchDataSource;
}
