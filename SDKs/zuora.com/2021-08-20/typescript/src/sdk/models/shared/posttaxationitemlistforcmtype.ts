import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTaxationItemListForCmType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxationItems" })
  taxationItems?: Record<string, any>[];
}
