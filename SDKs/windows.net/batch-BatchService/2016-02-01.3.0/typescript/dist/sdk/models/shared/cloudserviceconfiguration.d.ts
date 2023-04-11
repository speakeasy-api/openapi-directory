import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for nodes in a pool based on the Azure Cloud Services platform.
 */
export declare class CloudServiceConfiguration extends SpeakeasyBase {
    /**
     * The Azure Guest OS Version currently installed on the virtual machines in the pool. This may differ from TargetOSVersion if the pool state is Upgrading.
     */
    currentOSVersion?: string;
    /**
     * The Azure Guest OS family to be installed on the virtual machines in the pool.
     */
    osFamily: string;
    /**
     * The Azure Guest OS version to be installed on the virtual machines in the pool. The default value is * which specifies the latest operating system version for the specified OS family.
     */
    targetOSVersion?: string;
}
