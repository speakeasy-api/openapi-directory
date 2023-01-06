package shared

type ProviderAccountDetailAggregationSourceEnum string

const (
	ProviderAccountDetailAggregationSourceEnumSystem ProviderAccountDetailAggregationSourceEnum = "SYSTEM"
	ProviderAccountDetailAggregationSourceEnumUser   ProviderAccountDetailAggregationSourceEnum = "USER"
)

type ProviderAccountDetailOauthMigrationStatusEnum string

const (
	ProviderAccountDetailOauthMigrationStatusEnumInProgress   ProviderAccountDetailOauthMigrationStatusEnum = "IN_PROGRESS"
	ProviderAccountDetailOauthMigrationStatusEnumToBeMigrated ProviderAccountDetailOauthMigrationStatusEnum = "TO_BE_MIGRATED"
	ProviderAccountDetailOauthMigrationStatusEnumCompleted    ProviderAccountDetailOauthMigrationStatusEnum = "COMPLETED"
)

type ProviderAccountDetailStatusEnum string

const (
	ProviderAccountDetailStatusEnumLoginInProgress     ProviderAccountDetailStatusEnum = "LOGIN_IN_PROGRESS"
	ProviderAccountDetailStatusEnumUserInputRequired   ProviderAccountDetailStatusEnum = "USER_INPUT_REQUIRED"
	ProviderAccountDetailStatusEnumInProgress          ProviderAccountDetailStatusEnum = "IN_PROGRESS"
	ProviderAccountDetailStatusEnumPartialSuccess      ProviderAccountDetailStatusEnum = "PARTIAL_SUCCESS"
	ProviderAccountDetailStatusEnumSuccess             ProviderAccountDetailStatusEnum = "SUCCESS"
	ProviderAccountDetailStatusEnumFailed              ProviderAccountDetailStatusEnum = "FAILED"
	ProviderAccountDetailStatusEnumMigrationInProgress ProviderAccountDetailStatusEnum = "MIGRATION_IN_PROGRESS"
)

type ProviderAccountDetail struct {
	AggregationSource    *ProviderAccountDetailAggregationSourceEnum    `json:"aggregationSource,omitempty"`
	ConsentID            int64                                          `json:"consentId"`
	CreatedDate          *string                                        `json:"createdDate,omitempty"`
	Dataset              []AccountDataset                               `json:"dataset,omitempty"`
	ID                   *int64                                         `json:"id,omitempty"`
	IsManual             *bool                                          `json:"isManual,omitempty"`
	LastUpdated          *string                                        `json:"lastUpdated,omitempty"`
	LoginForm            []LoginForm                                    `json:"loginForm,omitempty"`
	OauthMigrationStatus *ProviderAccountDetailOauthMigrationStatusEnum `json:"oauthMigrationStatus,omitempty"`
	Preferences          *ProviderAccountPreferences                    `json:"preferences,omitempty"`
	ProviderID           *int64                                         `json:"providerId,omitempty"`
	RequestID            *string                                        `json:"requestId,omitempty"`
	Status               *ProviderAccountDetailStatusEnum               `json:"status,omitempty"`
}
