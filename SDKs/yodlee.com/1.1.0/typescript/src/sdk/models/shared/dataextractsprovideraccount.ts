import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountDataset } from "./accountdataset";


export enum DataExtractsProviderAccountAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum DataExtractsProviderAccountOauthMigrationStatusEnum {
    InProgress = "IN_PROGRESS",
    ToBeMigrated = "TO_BE_MIGRATED",
    Completed = "COMPLETED"
}

export enum DataExtractsProviderAccountStatusEnum {
    LoginInProgress = "LOGIN_IN_PROGRESS",
    UserInputRequired = "USER_INPUT_REQUIRED",
    InProgress = "IN_PROGRESS",
    PartialSuccess = "PARTIAL_SUCCESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    MigrationInProgress = "MIGRATION_IN_PROGRESS"
}


export class DataExtractsProviderAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationSource" })
  aggregationSource?: DataExtractsProviderAccountAggregationSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=dataset", elemType: AccountDataset })
  dataset?: AccountDataset[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isManual" })
  isManual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthMigrationStatus" })
  oauthMigrationStatus?: DataExtractsProviderAccountOauthMigrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: number;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DataExtractsProviderAccountStatusEnum;
}
