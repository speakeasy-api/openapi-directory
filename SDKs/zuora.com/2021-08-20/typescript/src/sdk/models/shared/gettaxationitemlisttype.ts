import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaxationItemListType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxationItems" })
  taxationItems?: Record<string, any>[];
}
