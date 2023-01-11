import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FullAccountNumberList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentAccountNumber" })
  paymentAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=unmaskedAccountNumber" })
  unmaskedAccountNumber?: string;
}
