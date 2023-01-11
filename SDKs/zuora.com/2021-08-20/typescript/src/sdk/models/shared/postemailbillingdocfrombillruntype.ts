import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEmailBillingDocfromBillRunType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resend" })
  resend?: boolean;
}
