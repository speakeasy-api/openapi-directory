import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentDate" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;
}
