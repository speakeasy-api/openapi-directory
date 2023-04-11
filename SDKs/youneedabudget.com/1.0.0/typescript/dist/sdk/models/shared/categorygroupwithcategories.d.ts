import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class CategoryGroupWithCategories extends SpeakeasyBase {
    /**
     * Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     */
    categories: Category[];
    /**
     * Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
     */
    deleted: boolean;
    /**
     * Whether or not the category group is hidden
     */
    hidden: boolean;
    id: string;
    name: string;
}
