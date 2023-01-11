import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDelayAuthorizeCaptureMitTransactionSourceEnum {
    CUnscheduled = "C_Unscheduled",
    MRecurring = "M_Recurring",
    MUnscheduled = "M_Unscheduled"
}
export declare class PostDelayAuthorizeCapture extends SpeakeasyBase {
    accountId: string;
    accountNumber: string;
    amount: number;
    gatewayOrderId: string;
    mitTransactionSource?: PostDelayAuthorizeCaptureMitTransactionSourceEnum;
    softDescriptor?: string;
    softDescriptorPhone?: string;
}
