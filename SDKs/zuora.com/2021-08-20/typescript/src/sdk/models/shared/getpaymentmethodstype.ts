import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentMethodType } from "./getpaymentmethodtype";



export class GetPaymentMethodsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditCards", elemType: GetPaymentMethodType })
  creditCards?: GetPaymentMethodType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
