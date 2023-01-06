package shared

type ProviderDetailPriorityEnum string

const (
	ProviderDetailPRIORITYEnumPopular   ProviderDetailPriorityEnum = "POPULAR"
	ProviderDetailPRIORITYEnumSuggested ProviderDetailPriorityEnum = "SUGGESTED"
	ProviderDetailPRIORITYEnumCobrand   ProviderDetailPriorityEnum = "COBRAND"
	ProviderDetailPRIORITYEnumSearch    ProviderDetailPriorityEnum = "SEARCH"
	ProviderDetailPRIORITYEnumAll       ProviderDetailPriorityEnum = "ALL"
)

type ProviderDetailAccountTypeEnum string

const (
	ProviderDetailAccountTypeEnumCurrent       ProviderDetailAccountTypeEnum = "CURRENT"
	ProviderDetailAccountTypeEnumBrokerageCash ProviderDetailAccountTypeEnum = "BROKERAGE_CASH"
)

type ProviderDetailAuthParameterEnum string

const (
	ProviderDetailAuthParameterEnumAuthorizationCode ProviderDetailAuthParameterEnum = "authorizationCode"
	ProviderDetailAuthParameterEnumIDToken           ProviderDetailAuthParameterEnum = "idToken"
	ProviderDetailAuthParameterEnumAuthResponse      ProviderDetailAuthParameterEnum = "authResponse"
)

type ProviderDetailAuthTypeEnum string

const (
	ProviderDetailAuthTypeEnumOauth          ProviderDetailAuthTypeEnum = "OAUTH"
	ProviderDetailAuthTypeEnumCredentials    ProviderDetailAuthTypeEnum = "CREDENTIALS"
	ProviderDetailAuthTypeEnumMfaCredentials ProviderDetailAuthTypeEnum = "MFA_CREDENTIALS"
)

type ProviderDetailStatusEnum string

const (
	ProviderDetailStatusEnumSupported   ProviderDetailStatusEnum = "Supported"
	ProviderDetailStatusEnumBeta        ProviderDetailStatusEnum = "Beta"
	ProviderDetailStatusEnumUnsupported ProviderDetailStatusEnum = "Unsupported"
)

type ProviderDetail struct {
	PRIORITY               *ProviderDetailPriorityEnum       `json:"PRIORITY,omitempty"`
	AccountType            []ProviderDetailAccountTypeEnum   `json:"accountType,omitempty"`
	AssociatedProviderIds  []int64                           `json:"associatedProviderIds,omitempty"`
	AuthParameter          []ProviderDetailAuthParameterEnum `json:"authParameter,omitempty"`
	AuthType               *ProviderDetailAuthTypeEnum       `json:"authType,omitempty"`
	BaseURL                *string                           `json:"baseUrl,omitempty"`
	Capability             []Capability                      `json:"capability,omitempty"`
	CountryISOCode         *string                           `json:"countryISOCode,omitempty"`
	Dataset                []ProvidersDataset                `json:"dataset,omitempty"`
	Favicon                *string                           `json:"favicon,omitempty"`
	Help                   *string                           `json:"help,omitempty"`
	ID                     *int64                            `json:"id,omitempty"`
	IsAddedByUser          *string                           `json:"isAddedByUser,omitempty"`
	IsAutoRefreshEnabled   *bool                             `json:"isAutoRefreshEnabled,omitempty"`
	IsConsentRequired      *bool                             `json:"isConsentRequired,omitempty"`
	LanguageISOCode        *string                           `json:"languageISOCode,omitempty"`
	LastModified           *string                           `json:"lastModified,omitempty"`
	LoginForm              []LoginForm                       `json:"loginForm,omitempty"`
	LoginURL               *string                           `json:"loginUrl,omitempty"`
	Logo                   *string                           `json:"logo,omitempty"`
	Name                   *string                           `json:"name,omitempty"`
	PrimaryLanguageISOCode *string                           `json:"primaryLanguageISOCode,omitempty"`
	Status                 *ProviderDetailStatusEnum         `json:"status,omitempty"`
}
