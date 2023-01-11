import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDataset } from "./accountdataset";
export declare enum DataExtractsProviderAccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum DataExtractsProviderAccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}
export declare enum DataExtractsProviderAccountStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    UserInputRequired = "USER_INPUT_REQUIRED",
    InProgress = "IN_PROGRESS",
    PartialSuccess = "PARTIAL_SUCCESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}
export declare class DataExtractsProviderAccount extends SpeakeasyBase {
    aggregationSource?: DataExtractsProviderAccountAggregationSourceEnum;
    createdDate?: string;
    dataset?: AccountDataset[];
    id?: number;
    isDeleted?: boolean;
    isManual?: boolean;
    lastUpdated?: string;
    oauthMigrationStatus?: DataExtractsProviderAccountOauthMigrationStatusEnum;
    providerId?: number;
    requestId?: string;
    status?: DataExtractsProviderAccountStatusEnum;
}
