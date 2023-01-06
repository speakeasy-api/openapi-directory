package shared

type UpdatedProviderAccountAggregationSourceEnum string

const (
	UpdatedProviderAccountAggregationSourceEnumSystem UpdatedProviderAccountAggregationSourceEnum = "SYSTEM"
	UpdatedProviderAccountAggregationSourceEnumUser   UpdatedProviderAccountAggregationSourceEnum = "USER"
)

type UpdatedProviderAccountOauthMigrationStatusEnum string

const (
	UpdatedProviderAccountOauthMigrationStatusEnumInProgress   UpdatedProviderAccountOauthMigrationStatusEnum = "IN_PROGRESS"
	UpdatedProviderAccountOauthMigrationStatusEnumToBeMigrated UpdatedProviderAccountOauthMigrationStatusEnum = "TO_BE_MIGRATED"
	UpdatedProviderAccountOauthMigrationStatusEnumCompleted    UpdatedProviderAccountOauthMigrationStatusEnum = "COMPLETED"
)

type UpdatedProviderAccountStatusEnum string

const (
	UpdatedProviderAccountStatusEnumLoginInProgress     UpdatedProviderAccountStatusEnum = "LOGIN_IN_PROGRESS"
	UpdatedProviderAccountStatusEnumUserInputRequired   UpdatedProviderAccountStatusEnum = "USER_INPUT_REQUIRED"
	UpdatedProviderAccountStatusEnumInProgress          UpdatedProviderAccountStatusEnum = "IN_PROGRESS"
	UpdatedProviderAccountStatusEnumPartialSuccess      UpdatedProviderAccountStatusEnum = "PARTIAL_SUCCESS"
	UpdatedProviderAccountStatusEnumSuccess             UpdatedProviderAccountStatusEnum = "SUCCESS"
	UpdatedProviderAccountStatusEnumFailed              UpdatedProviderAccountStatusEnum = "FAILED"
	UpdatedProviderAccountStatusEnumMigrationInProgress UpdatedProviderAccountStatusEnum = "MIGRATION_IN_PROGRESS"
)

type UpdatedProviderAccount struct {
	AggregationSource    *UpdatedProviderAccountAggregationSourceEnum    `json:"aggregationSource,omitempty"`
	CreatedDate          *string                                         `json:"createdDate,omitempty"`
	Dataset              []AccountDataset                                `json:"dataset,omitempty"`
	ID                   *int64                                          `json:"id,omitempty"`
	IsManual             *bool                                           `json:"isManual,omitempty"`
	LastUpdated          *string                                         `json:"lastUpdated,omitempty"`
	LoginForm            []LoginForm                                     `json:"loginForm,omitempty"`
	OauthMigrationStatus *UpdatedProviderAccountOauthMigrationStatusEnum `json:"oauthMigrationStatus,omitempty"`
	ProviderID           *int64                                          `json:"providerId,omitempty"`
	RequestID            *string                                         `json:"requestId,omitempty"`
	Status               *UpdatedProviderAccountStatusEnum               `json:"status,omitempty"`
}
