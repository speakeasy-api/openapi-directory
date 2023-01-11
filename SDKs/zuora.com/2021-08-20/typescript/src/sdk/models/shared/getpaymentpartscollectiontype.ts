import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentPartTypewithSuccess } from "./getpaymentparttypewithsuccess";



export class GetPaymentPartsCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GetPaymentPartTypewithSuccess })
  parts?: GetPaymentPartTypewithSuccess[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
