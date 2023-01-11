import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransferPaymentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;
}
