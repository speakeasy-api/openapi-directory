import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDataset } from "./accountdataset";
import { ProviderAccountPreferences } from "./provideraccountpreferences";
export declare enum ProviderAccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum ProviderAccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}
export declare enum ProviderAccountStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    UserInputRequired = "USER_INPUT_REQUIRED",
    InProgress = "IN_PROGRESS",
    PartialSuccess = "PARTIAL_SUCCESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}
export declare class ProviderAccount extends SpeakeasyBase {
    aggregationSource?: ProviderAccountAggregationSourceEnum;
    consentId?: number;
    createdDate?: string;
    dataset?: AccountDataset[];
    id?: number;
    isManual?: boolean;
    lastUpdated?: string;
    oauthMigrationStatus?: ProviderAccountOauthMigrationStatusEnum;
    preferences?: ProviderAccountPreferences;
    providerId?: number;
    requestId?: string;
    status?: ProviderAccountStatusEnum;
}
