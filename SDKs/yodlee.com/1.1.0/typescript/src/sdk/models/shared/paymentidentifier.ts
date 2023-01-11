import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaymentIdentifierTypeEnum {
    ReferenceNumber = "REFERENCE_NUMBER",
    PlatformCode = "PLATFORM_CODE"
}


export class PaymentIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentIdentifierTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
