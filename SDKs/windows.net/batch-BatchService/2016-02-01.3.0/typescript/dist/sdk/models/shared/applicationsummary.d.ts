import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an application in an Azure Batch account.
 */
export declare class ApplicationSummary extends SpeakeasyBase {
    /**
     * The display name for the application.
     */
    displayName: string;
    /**
     * A string that uniquely identifies the application within the account.
     */
    id: string;
    versions: string[];
}
