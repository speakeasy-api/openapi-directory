import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a CloudPoolOperations.UpgradeOS request.
 */
export declare class PoolUpgradeOSParameter extends SpeakeasyBase {
    /**
     * The Azure Guest OS version to be installed on the virtual machines in the pool.
     */
    targetOSVersion: string;
}
