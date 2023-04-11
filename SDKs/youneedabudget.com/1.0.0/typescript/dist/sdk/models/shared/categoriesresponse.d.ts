import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryGroupWithCategories } from "./categorygroupwithcategories";
export declare class CategoriesResponseData extends SpeakeasyBase {
    categoryGroups: CategoryGroupWithCategories[];
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
}
/**
 * The categories grouped by category group
 */
export declare class CategoriesResponse extends SpeakeasyBase {
    data: CategoriesResponseData;
}
