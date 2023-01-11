import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentItemPartTypewithSuccess } from "./getpaymentitemparttypewithsuccess";



export class GetPaymentItemPartCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemParts", elemType: GetPaymentItemPartTypewithSuccess })
  itemParts?: GetPaymentItemPartTypewithSuccess[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
