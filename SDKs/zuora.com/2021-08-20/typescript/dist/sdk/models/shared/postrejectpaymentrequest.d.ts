import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRejectPaymentRequest extends SpeakeasyBase {
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    referenceId?: string;
    secondReferenceId?: string;
    settledOn?: Date;
}
