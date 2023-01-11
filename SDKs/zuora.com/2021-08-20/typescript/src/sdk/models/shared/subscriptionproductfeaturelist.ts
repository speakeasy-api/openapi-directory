import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionAmendSubscriptionProductFeature } from "./actionamendsubscriptionproductfeature";



export class SubscriptionProductFeatureList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubscriptionProductFeature", elemType: ActionAmendSubscriptionProductFeature })
  subscriptionProductFeature?: ActionAmendSubscriptionProductFeature[];
}
