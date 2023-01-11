import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGenerateBillingDocumentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoPost" })
  autoPost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=chargeTypeToExclude" })
  chargeTypeToExclude?: string[];

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionIds" })
  subscriptionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;
}
