import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProxyActiongenerateRequestTypeEnum {
    Invoice = "Invoice"
}
export declare class ProxyActiongenerateRequest extends SpeakeasyBase {
    objects: Record<string, any>[];
    type: ProxyActiongenerateRequestTypeEnum;
}
