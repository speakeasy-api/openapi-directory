import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response to a ComputeNodeOperation.GetRemoteLoginSettings request.
 */
export declare class ComputeNodeGetRemoteLoginSettingsResult extends SpeakeasyBase {
    /**
     * The IP address used for remote login to the compute node.
     */
    remoteLoginIPAddress: string;
    /**
     * The port used for remote login to the compute node.
     */
    remoteLoginPort: number;
}
