import { SpeakeasyBase } from "../../../internal/utils";
import { Frequency } from "./frequency";
import { Validity } from "./validity";
export declare class Plan extends SpeakeasyBase {
    frequency: Frequency;
    type: string;
    validity: Validity;
}
