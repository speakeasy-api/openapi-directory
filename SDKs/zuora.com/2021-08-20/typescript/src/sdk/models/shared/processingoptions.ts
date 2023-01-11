import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingOptions } from "./billingoptions";



// ProcessingOptionsElectronicPaymentOptions
/** 
 * Container for the electronic payment options.
**/
export class ProcessingOptionsElectronicPaymentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;
}


// ProcessingOptions
/** 
 * Invoice or Payment.
**/
export class ProcessingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationOrder" })
  applicationOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=applyCredit" })
  applyCredit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applyCreditBalance" })
  applyCreditBalance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=billingOptions" })
  billingOptions?: BillingOptions;

  @SpeakeasyMetadata({ data: "json, name=collectPayment" })
  collectPayment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=electronicPaymentOptions" })
  electronicPaymentOptions?: ProcessingOptionsElectronicPaymentOptions;

  @SpeakeasyMetadata({ data: "json, name=runBilling" })
  runBilling?: boolean;
}
