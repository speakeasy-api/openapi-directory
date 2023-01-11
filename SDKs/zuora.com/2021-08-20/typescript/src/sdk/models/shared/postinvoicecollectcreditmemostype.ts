import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInvoiceCollectCreditMemosType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=memoAmount" })
  memoAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=memoNumber" })
  memoNumber?: string;
}
