import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Windows operating system settings to apply to the virtual machine.
 */
export declare class WindowsConfiguration extends SpeakeasyBase {
    /**
     * Whether automatic updates are enabled on the virtual machine. If omitted, the default value is true.
     */
    enableAutomaticUpdates?: boolean;
}
