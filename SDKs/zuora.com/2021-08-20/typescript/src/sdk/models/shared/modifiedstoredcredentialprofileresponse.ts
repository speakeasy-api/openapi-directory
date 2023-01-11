import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifiedStoredCredentialProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
