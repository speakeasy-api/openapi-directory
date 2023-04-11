import { SpeakeasyBase } from "../../../internal/utils";
import { FeedFilter } from "./feedfilter";
import { Queue } from "./queue";
export declare class FeedConfigurationRequest extends SpeakeasyBase {
    /**
     * Object with type and status that will filter feed orders.
     */
    filter: FeedFilter;
    /**
     * Object with information about timeout and message retention.
     */
    queue: Queue;
}
