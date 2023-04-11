import { SpeakeasyBase } from "../../../internal/utils";
import { ChangesDatum } from "./changesdatum";
export declare class ChangesAttachment extends SpeakeasyBase {
    /**
     * Array with data on order changes.
     */
    changesData: ChangesDatum[];
    /**
     * Change ID.
     */
    id: string;
}
