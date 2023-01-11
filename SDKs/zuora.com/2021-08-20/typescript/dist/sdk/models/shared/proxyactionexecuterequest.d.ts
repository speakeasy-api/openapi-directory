import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProxyActionexecuteRequestTypeEnum {
    InvoiceSplit = "InvoiceSplit"
}
export declare class ProxyActionexecuteRequest extends SpeakeasyBase {
    ids: string[];
    synchronous: boolean;
    type: ProxyActionexecuteRequestTypeEnum;
}
