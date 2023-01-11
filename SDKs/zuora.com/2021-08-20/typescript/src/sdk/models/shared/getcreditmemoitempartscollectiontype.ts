import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetCreditMemoItemPartTypewithSuccess } from "./getcreditmemoitemparttypewithsuccess";



export class GetCreditMemoItemPartsCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemParts", elemType: GetCreditMemoItemPartTypewithSuccess })
  itemParts?: GetCreditMemoItemPartTypewithSuccess[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
