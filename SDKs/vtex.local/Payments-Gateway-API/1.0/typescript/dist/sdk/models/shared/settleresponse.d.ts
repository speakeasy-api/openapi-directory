import { SpeakeasyBase } from "../../../internal/utils";
export declare class SettleResponse extends SpeakeasyBase {
    cancelledValue: number;
    connectorRefundedValue: number;
    message: string;
    processingDate: string;
    refundedToken: string;
    refundedValue: number;
    status: number;
    statusDetail: string;
    token: string;
}
