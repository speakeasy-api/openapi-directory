import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyActionqueryRequestConf extends SpeakeasyBase {
    batchSize?: number;
}
export declare class ProxyActionqueryRequest extends SpeakeasyBase {
    conf?: ProxyActionqueryRequestConf;
    queryString: string;
}
