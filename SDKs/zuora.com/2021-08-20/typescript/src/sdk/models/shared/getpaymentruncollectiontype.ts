import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentRunType } from "./getpaymentruntype";



export class GetPaymentRunCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentRuns", elemType: GetPaymentRunType })
  paymentRuns?: GetPaymentRunType[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
