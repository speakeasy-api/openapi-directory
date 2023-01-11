import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaymentIdentifierTypeEnum {
    ReferenceNumber = "REFERENCE_NUMBER",
    PlatformCode = "PLATFORM_CODE"
}
export declare class PaymentIdentifier extends SpeakeasyBase {
    type?: PaymentIdentifierTypeEnum;
    value?: string;
}
