import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RefundPartResponseTypewithSuccess } from "./refundpartresponsetypewithsuccess";



export class GetRefundPartCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parts", elemType: RefundPartResponseTypewithSuccess })
  parts?: RefundPartResponseTypewithSuccess[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
