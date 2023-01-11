import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostVoidAuthorize extends SpeakeasyBase {
    accountId?: string;
    accountNumber?: string;
    gatewayOrderId: string;
    paymentGatewayId?: string;
    transactionId: string;
}
