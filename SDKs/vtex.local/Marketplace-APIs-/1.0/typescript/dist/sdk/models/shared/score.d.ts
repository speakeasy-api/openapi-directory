import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Matcher rates received SKUs by comparing the data sent by sellers to existing fields in the marketplace. The calculation of these scores determines whether the product has been: `Approved` or `Denied`.
 */
export declare class Score extends SpeakeasyBase {
    /**
     * Insert in this field the desired minimum score to approve SKUs. If this field is set as 99, it means all approvals will be made manually.
     */
    approve: number;
    /**
     * Insert in this field the desired maximum score to reject SKUs.
     */
    reject: number;
}
