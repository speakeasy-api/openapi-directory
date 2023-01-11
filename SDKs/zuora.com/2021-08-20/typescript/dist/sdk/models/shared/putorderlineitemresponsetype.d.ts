import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutOrderLineItemResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class PutOrderLineItemResponseType extends SpeakeasyBase {
    processId?: string;
    reasons?: PutOrderLineItemResponseTypeReasons[];
    success?: boolean;
}
