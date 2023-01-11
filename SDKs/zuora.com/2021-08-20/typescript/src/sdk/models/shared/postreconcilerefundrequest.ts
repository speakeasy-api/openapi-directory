import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostReconcileRefundRequestActionEnum {
    Settle = "settle",
    Reject = "reject"
}


export class PostReconcileRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PostReconcileRefundRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=actionDate" })
  actionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayReconciliationReason" })
  gatewayReconciliationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayReconciliationStatus" })
  gatewayReconciliationStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId?: string;
}
