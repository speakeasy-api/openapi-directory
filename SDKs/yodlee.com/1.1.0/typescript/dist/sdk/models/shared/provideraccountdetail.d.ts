import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDataset } from "./accountdataset";
import { LoginForm } from "./loginform";
import { ProviderAccountPreferences } from "./provideraccountpreferences";
export declare enum ProviderAccountDetailAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum ProviderAccountDetailOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}
export declare enum ProviderAccountDetailStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    UserInputRequired = "USER_INPUT_REQUIRED",
    InProgress = "IN_PROGRESS",
    PartialSuccess = "PARTIAL_SUCCESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}
export declare class ProviderAccountDetail extends SpeakeasyBase {
    aggregationSource?: ProviderAccountDetailAggregationSourceEnum;
    consentId: number;
    createdDate?: string;
    dataset?: AccountDataset[];
    id?: number;
    isManual?: boolean;
    lastUpdated?: string;
    loginForm?: LoginForm[];
    oauthMigrationStatus?: ProviderAccountDetailOauthMigrationStatusEnum;
    preferences?: ProviderAccountPreferences;
    providerId?: number;
    requestId?: string;
    status?: ProviderAccountDetailStatusEnum;
}
