import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveProduct
/** 
 * Information about an order action of type `RemoveProduct`.
 * 
**/
export class RemoveProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ratePlanId" })
  ratePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
