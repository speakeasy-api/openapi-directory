import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
export declare class UpdateTrackingStatusRequest extends SpeakeasyBase {
    /**
     * Date and time of when the package was delivered. Note that it is different from the tracking date parameter. The `deliveredDate` format is `yyyy-mm-dd hh:mm`.
     */
    deliveredDate: string;
    events: Event[];
    isDelivered: boolean;
}
