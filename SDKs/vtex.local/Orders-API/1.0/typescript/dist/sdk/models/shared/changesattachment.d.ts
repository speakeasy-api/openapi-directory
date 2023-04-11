import { SpeakeasyBase } from "../../../internal/utils";
import { ChangesDatum } from "./changesdatum";
/**
 * Information about changes in the order.
 */
export declare class ChangesAttachment extends SpeakeasyBase {
    /**
     * Order change details.
     */
    changesData: ChangesDatum[];
    /**
     * Object ID, the expect value is `changeAttachment`.
     */
    id: string;
}
