import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an application in an Azure Batch account.
 */
export declare class ApplicationSummary extends SpeakeasyBase {
    /**
     * Gets or sets the display name for the application.
     */
    displayName: string;
    /**
     * Gets or sets a string that uniquely identifies the application within the account.
     */
    id: string;
    versions: string[];
}
