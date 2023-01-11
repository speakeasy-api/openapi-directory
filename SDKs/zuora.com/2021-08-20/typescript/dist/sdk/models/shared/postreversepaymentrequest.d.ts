import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReversePaymentRequest extends SpeakeasyBase {
    amount: number;
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    referenceId?: string;
    secondReferenceId?: string;
    settledOn?: Date;
}
