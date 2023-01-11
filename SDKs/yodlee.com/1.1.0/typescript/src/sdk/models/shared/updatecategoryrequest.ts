import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateCategoryRequestSourceEnum {
    System = "SYSTEM",
    User = "USER"
}


export class UpdateCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryName" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=highLevelCategoryName" })
  highLevelCategoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: UpdateCategoryRequestSourceEnum;
}
