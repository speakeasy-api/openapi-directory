import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailCategory } from "./detailcategory";
import { TransactionCategorySourceEnum } from "./transaction";
import { TransactionCategoryTypeEnum } from "./transaction";


export enum TransactionCategoryClassificationEnum {
    Personal = "PERSONAL",
    Business = "BUSINESS"
}


export class TransactionCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: TransactionCategoryClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultCategoryName" })
  defaultCategoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultHighLevelCategoryName" })
  defaultHighLevelCategoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=detailCategory", elemType: DetailCategory })
  detailCategory?: DetailCategory[];

  @SpeakeasyMetadata({ data: "json, name=highLevelCategoryId" })
  highLevelCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=highLevelCategoryName" })
  highLevelCategoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: TransactionCategorySourceEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TransactionCategoryTypeEnum;
}
