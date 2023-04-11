import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class CategoryResponseData extends SpeakeasyBase {
    category: Category;
}
/**
 * The requested category
 */
export declare class CategoryResponse extends SpeakeasyBase {
    data: CategoryResponseData;
}
