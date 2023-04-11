import { SpeakeasyBase } from "../../../internal/utils";
import { SaveMonthCategory } from "./savemonthcategory";
/**
 * The category to update.  Only `budgeted` amount can be updated and any other fields specified will be ignored.
 */
export declare class PatchMonthCategoryWrapper extends SpeakeasyBase {
    category: SaveMonthCategory;
}
