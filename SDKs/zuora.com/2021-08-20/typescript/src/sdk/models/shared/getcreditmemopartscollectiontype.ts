import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetCreditMemoPartTypewithSuccess } from "./getcreditmemoparttypewithsuccess";



export class GetCreditMemoPartsCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GetCreditMemoPartTypewithSuccess })
  parts?: GetCreditMemoPartTypewithSuccess[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
