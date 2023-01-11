import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSubscriptionWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions" })
  subscriptions?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
