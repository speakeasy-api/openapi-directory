import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnablePanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class EnablePanoramaFirewallRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class EnablePanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
