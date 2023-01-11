import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentRunDataElementResponse } from "./getpaymentrundataelementresponse";



export class GetPaymentRunDataArrayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetPaymentRunDataElementResponse })
  data?: GetPaymentRunDataElementResponse[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
