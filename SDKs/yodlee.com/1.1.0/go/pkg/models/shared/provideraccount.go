package shared

type ProviderAccountAggregationSourceEnum string

const (
	ProviderAccountAggregationSourceEnumSystem ProviderAccountAggregationSourceEnum = "SYSTEM"
	ProviderAccountAggregationSourceEnumUser   ProviderAccountAggregationSourceEnum = "USER"
)

type ProviderAccountOauthMigrationStatusEnum string

const (
	ProviderAccountOauthMigrationStatusEnumInProgress   ProviderAccountOauthMigrationStatusEnum = "IN_PROGRESS"
	ProviderAccountOauthMigrationStatusEnumToBeMigrated ProviderAccountOauthMigrationStatusEnum = "TO_BE_MIGRATED"
	ProviderAccountOauthMigrationStatusEnumCompleted    ProviderAccountOauthMigrationStatusEnum = "COMPLETED"
)

type ProviderAccountStatusEnum string

const (
	ProviderAccountStatusEnumLoginInProgress     ProviderAccountStatusEnum = "LOGIN_IN_PROGRESS"
	ProviderAccountStatusEnumUserInputRequired   ProviderAccountStatusEnum = "USER_INPUT_REQUIRED"
	ProviderAccountStatusEnumInProgress          ProviderAccountStatusEnum = "IN_PROGRESS"
	ProviderAccountStatusEnumPartialSuccess      ProviderAccountStatusEnum = "PARTIAL_SUCCESS"
	ProviderAccountStatusEnumSuccess             ProviderAccountStatusEnum = "SUCCESS"
	ProviderAccountStatusEnumFailed              ProviderAccountStatusEnum = "FAILED"
	ProviderAccountStatusEnumMigrationInProgress ProviderAccountStatusEnum = "MIGRATION_IN_PROGRESS"
)

type ProviderAccount struct {
	AggregationSource    *ProviderAccountAggregationSourceEnum    `json:"aggregationSource,omitempty"`
	ConsentID            *int64                                   `json:"consentId,omitempty"`
	CreatedDate          *string                                  `json:"createdDate,omitempty"`
	Dataset              []AccountDataset                         `json:"dataset,omitempty"`
	ID                   *int64                                   `json:"id,omitempty"`
	IsManual             *bool                                    `json:"isManual,omitempty"`
	LastUpdated          *string                                  `json:"lastUpdated,omitempty"`
	OauthMigrationStatus *ProviderAccountOauthMigrationStatusEnum `json:"oauthMigrationStatus,omitempty"`
	Preferences          *ProviderAccountPreferences              `json:"preferences,omitempty"`
	ProviderID           *int64                                   `json:"providerId,omitempty"`
	RequestID            *string                                  `json:"requestId,omitempty"`
	Status               *ProviderAccountStatusEnum               `json:"status,omitempty"`
}
