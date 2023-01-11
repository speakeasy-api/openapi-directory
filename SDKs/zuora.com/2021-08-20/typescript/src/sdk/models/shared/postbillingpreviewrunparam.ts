import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBillingPreviewRunParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assumeRenewal" })
  assumeRenewal?: string;

  @SpeakeasyMetadata({ data: "json, name=batch" })
  batch?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeTypeToExclude" })
  chargeTypeToExclude?: string;

  @SpeakeasyMetadata({ data: "json, name=includingEvergreenSubscription" })
  includingEvergreenSubscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate: Date;
}
