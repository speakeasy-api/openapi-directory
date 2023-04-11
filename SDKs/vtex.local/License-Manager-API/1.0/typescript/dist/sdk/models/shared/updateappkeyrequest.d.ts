import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request body for activating/deactivating application keys
 */
export declare class UpdateappkeyRequest extends SpeakeasyBase {
    /**
     * If the application key should be active or inactive
     */
    isActive: boolean;
}
