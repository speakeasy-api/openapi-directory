import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoryGroup extends SpeakeasyBase {
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
