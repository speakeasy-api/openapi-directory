import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPaymentRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=applyCreditBalance" })
  applyCreditBalance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoApplyCreditMemo" })
  autoApplyCreditMemo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoApplyUnappliedPayment" })
  autoApplyUnappliedPayment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=batch" })
  batch?: string;

  @SpeakeasyMetadata({ data: "json, name=billCycleDay" })
  billCycleDay?: string;

  @SpeakeasyMetadata({ data: "json, name=billingRunId" })
  billingRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=collectPayment" })
  collectPayment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consolidatedPayment" })
  consolidatedPayment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentGatewayId" })
  paymentGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=processPaymentWithClosedPM" })
  processPaymentWithClosedPM?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runDate" })
  runDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;
}
