import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTaxationItemListForDmType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxationItems" })
  taxationItems?: Record<string, any>[];
}
