import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetRefundItemPartTypewithSuccess } from "./getrefunditemparttypewithsuccess";



export class GetRefundItemPartCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemParts", elemType: GetRefundItemPartTypewithSuccess })
  itemParts?: GetRefundItemPartTypewithSuccess[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
