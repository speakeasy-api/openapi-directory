import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTJournalEntrySegmentType extends SpeakeasyBase {
    /**
     * Name of segment. You must use the segment name that has already been specified in the default segment rule. In addition, segments need to be passed in the order where they were defined in the segmentation rule. If multiple segments are configured in the default rule, you need to specify all of them in order.
     */
    segmentName: string;
    /**
     * Value of segment in this summary journal entry.
     *
     * @remarks
     *
     */
    segmentValue: string;
}
