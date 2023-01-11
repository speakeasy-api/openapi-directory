import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



export class Statement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=amountDue" })
  amountDue?: Money;

  @SpeakeasyMetadata({ data: "json, name=apr" })
  apr?: number;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodEnd" })
  billingPeriodEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodStart" })
  billingPeriodStart?: string;

  @SpeakeasyMetadata({ data: "json, name=cashAdvance" })
  cashAdvance?: Money;

  @SpeakeasyMetadata({ data: "json, name=cashApr" })
  cashApr?: number;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interestAmount" })
  interestAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=isLatest" })
  isLatest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastPaymentAmount" })
  lastPaymentAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=lastPaymentDate" })
  lastPaymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=loanBalance" })
  loanBalance?: Money;

  @SpeakeasyMetadata({ data: "json, name=minimumPayment" })
  minimumPayment?: Money;

  @SpeakeasyMetadata({ data: "json, name=newCharges" })
  newCharges?: Money;

  @SpeakeasyMetadata({ data: "json, name=principalAmount" })
  principalAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=statementDate" })
  statementDate?: string;
}
