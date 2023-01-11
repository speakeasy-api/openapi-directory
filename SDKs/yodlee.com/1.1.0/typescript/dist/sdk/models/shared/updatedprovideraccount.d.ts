import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDataset } from "./accountdataset";
import { LoginForm } from "./loginform";
export declare enum UpdatedProviderAccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum UpdatedProviderAccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}
export declare enum UpdatedProviderAccountStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    UserInputRequired = "USER_INPUT_REQUIRED",
    InProgress = "IN_PROGRESS",
    PartialSuccess = "PARTIAL_SUCCESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}
export declare class UpdatedProviderAccount extends SpeakeasyBase {
    aggregationSource?: UpdatedProviderAccountAggregationSourceEnum;
    createdDate?: string;
    dataset?: AccountDataset[];
    id?: number;
    isManual?: boolean;
    lastUpdated?: string;
    loginForm?: LoginForm[];
    oauthMigrationStatus?: UpdatedProviderAccountOauthMigrationStatusEnum;
    providerId?: number;
    requestId?: string;
    status?: UpdatedProviderAccountStatusEnum;
}
