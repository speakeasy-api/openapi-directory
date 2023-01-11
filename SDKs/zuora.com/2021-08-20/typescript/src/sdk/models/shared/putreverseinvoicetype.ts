import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutReverseInvoiceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyEffectiveDate" })
  applyEffectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=memoDate" })
  memoDate?: Date;
}
