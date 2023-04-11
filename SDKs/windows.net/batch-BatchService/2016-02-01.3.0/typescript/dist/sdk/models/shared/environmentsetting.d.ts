import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An environment variable to be set on a task process.
 */
export declare class EnvironmentSetting extends SpeakeasyBase {
    /**
     * The name of the environment variable.
     */
    name?: string;
    /**
     * The value of the environment variable.
     */
    value?: string;
}
