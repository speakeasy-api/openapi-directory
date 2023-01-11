import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransactionCategoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryName" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=parentCategoryId" })
  parentCategoryId: number;
}
