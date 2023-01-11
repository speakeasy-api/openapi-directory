import { SpeakeasyBase } from "../../../internal/utils";
import { DetailCategory } from "./detailcategory";
import { TransactionCategorySourceEnum } from "./transaction";
import { TransactionCategoryTypeEnum } from "./transaction";
export declare enum TransactionCategoryClassificationEnum {
    Personal = "PERSONAL",
    Business = "BUSINESS"
}
export declare class TransactionCategory extends SpeakeasyBase {
    category?: string;
    classification?: TransactionCategoryClassificationEnum;
    defaultCategoryName?: string;
    defaultHighLevelCategoryName?: string;
    detailCategory?: DetailCategory[];
    highLevelCategoryId?: number;
    highLevelCategoryName?: string;
    id?: number;
    source?: TransactionCategorySourceEnum;
    type?: TransactionCategoryTypeEnum;
}
