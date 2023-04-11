import { SpeakeasyBase } from "../../../internal/utils";
import { ImageReference } from "./imagereference";
import { WindowsConfiguration } from "./windowsconfiguration";
/**
 * The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure.
 */
export declare class VirtualMachineConfiguration extends SpeakeasyBase {
    /**
     * A reference to an Azure Virtual Machines Marketplace image.
     */
    imageReference: ImageReference;
    /**
     * The SKU of Batch Node Agent to be provisioned on the compute node. The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems.
     */
    nodeAgentSKUId: string;
    /**
     * Windows operating system settings to apply to the virtual machine.
     */
    windowsConfiguration?: WindowsConfiguration;
}
