import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class SaveCategoryResponseData extends SpeakeasyBase {
    category: Category;
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
}
/**
 * The month category was successfully updated
 */
export declare class SaveCategoryResponse extends SpeakeasyBase {
    data: SaveCategoryResponseData;
}
