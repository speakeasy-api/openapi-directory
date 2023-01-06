package shared

type DataExtractsProviderAccountAggregationSourceEnum string

const (
	DataExtractsProviderAccountAggregationSourceEnumSystem DataExtractsProviderAccountAggregationSourceEnum = "SYSTEM"
	DataExtractsProviderAccountAggregationSourceEnumUser   DataExtractsProviderAccountAggregationSourceEnum = "USER"
)

type DataExtractsProviderAccountOauthMigrationStatusEnum string

const (
	DataExtractsProviderAccountOauthMigrationStatusEnumInProgress   DataExtractsProviderAccountOauthMigrationStatusEnum = "IN_PROGRESS"
	DataExtractsProviderAccountOauthMigrationStatusEnumToBeMigrated DataExtractsProviderAccountOauthMigrationStatusEnum = "TO_BE_MIGRATED"
	DataExtractsProviderAccountOauthMigrationStatusEnumCompleted    DataExtractsProviderAccountOauthMigrationStatusEnum = "COMPLETED"
)

type DataExtractsProviderAccountStatusEnum string

const (
	DataExtractsProviderAccountStatusEnumLoginInProgress     DataExtractsProviderAccountStatusEnum = "LOGIN_IN_PROGRESS"
	DataExtractsProviderAccountStatusEnumUserInputRequired   DataExtractsProviderAccountStatusEnum = "USER_INPUT_REQUIRED"
	DataExtractsProviderAccountStatusEnumInProgress          DataExtractsProviderAccountStatusEnum = "IN_PROGRESS"
	DataExtractsProviderAccountStatusEnumPartialSuccess      DataExtractsProviderAccountStatusEnum = "PARTIAL_SUCCESS"
	DataExtractsProviderAccountStatusEnumSuccess             DataExtractsProviderAccountStatusEnum = "SUCCESS"
	DataExtractsProviderAccountStatusEnumFailed              DataExtractsProviderAccountStatusEnum = "FAILED"
	DataExtractsProviderAccountStatusEnumMigrationInProgress DataExtractsProviderAccountStatusEnum = "MIGRATION_IN_PROGRESS"
)

type DataExtractsProviderAccount struct {
	AggregationSource    *DataExtractsProviderAccountAggregationSourceEnum    `json:"aggregationSource,omitempty"`
	CreatedDate          *string                                              `json:"createdDate,omitempty"`
	Dataset              []AccountDataset                                     `json:"dataset,omitempty"`
	ID                   *int64                                               `json:"id,omitempty"`
	IsDeleted            *bool                                                `json:"isDeleted,omitempty"`
	IsManual             *bool                                                `json:"isManual,omitempty"`
	LastUpdated          *string                                              `json:"lastUpdated,omitempty"`
	OauthMigrationStatus *DataExtractsProviderAccountOauthMigrationStatusEnum `json:"oauthMigrationStatus,omitempty"`
	ProviderID           *int64                                               `json:"providerId,omitempty"`
	RequestID            *string                                              `json:"requestId,omitempty"`
	Status               *DataExtractsProviderAccountStatusEnum               `json:"status,omitempty"`
}
