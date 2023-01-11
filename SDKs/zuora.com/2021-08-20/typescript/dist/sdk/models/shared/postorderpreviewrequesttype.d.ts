import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewOrderOrderAction } from "./previeworderorderaction";
import { QuoteObjectFields } from "./quoteobjectfields";
import { RampRequest } from "./ramprequest";
import { OrderLineItemCommonPostOrder } from "./orderlineitemcommonpostorder";
import { PreviewAccountInfo } from "./previewaccountinfo";
import { PreviewOptions } from "./previewoptions";
export declare class PostOrderPreviewRequestTypeSubscriptions extends SpeakeasyBase {
    customFields?: Record<string, any>;
    orderActions?: PreviewOrderOrderAction[];
    quote?: QuoteObjectFields;
    ramp?: RampRequest;
    subscriptionNumber?: string;
}
export declare class PostOrderPreviewRequestType extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    existingAccountNumber?: string;
    orderDate: Date;
    orderLineItems?: OrderLineItemCommonPostOrder[];
    orderNumber?: string;
    previewAccountInfo?: PreviewAccountInfo;
    previewOptions: PreviewOptions;
    subscriptions: PostOrderPreviewRequestTypeSubscriptions[];
}
