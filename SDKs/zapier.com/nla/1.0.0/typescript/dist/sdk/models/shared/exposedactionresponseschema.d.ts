import { SpeakeasyBase } from "../../../internal/utils";
import { ExposedActionSchema } from "./exposedactionschema";
/**
 * OK
 */
export declare class ExposedActionResponseSchema extends SpeakeasyBase {
    /**
     * URL to configure and expose more actions.
     */
    configurationLink: string;
    results: ExposedActionSchema[];
}
