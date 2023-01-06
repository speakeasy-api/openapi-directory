package shared

type ProvidersPriorityEnum string

const (
	ProvidersPRIORITYEnumPopular   ProvidersPriorityEnum = "POPULAR"
	ProvidersPRIORITYEnumSuggested ProvidersPriorityEnum = "SUGGESTED"
	ProvidersPRIORITYEnumCobrand   ProvidersPriorityEnum = "COBRAND"
	ProvidersPRIORITYEnumSearch    ProvidersPriorityEnum = "SEARCH"
	ProvidersPRIORITYEnumAll       ProvidersPriorityEnum = "ALL"
)

type ProvidersAccountTypeEnum string

const (
	ProvidersAccountTypeEnumCurrent       ProvidersAccountTypeEnum = "CURRENT"
	ProvidersAccountTypeEnumBrokerageCash ProvidersAccountTypeEnum = "BROKERAGE_CASH"
)

type ProvidersAuthParameterEnum string

const (
	ProvidersAuthParameterEnumAuthorizationCode ProvidersAuthParameterEnum = "authorizationCode"
	ProvidersAuthParameterEnumIDToken           ProvidersAuthParameterEnum = "idToken"
	ProvidersAuthParameterEnumAuthResponse      ProvidersAuthParameterEnum = "authResponse"
)

type ProvidersAuthTypeEnum string

const (
	ProvidersAuthTypeEnumOauth          ProvidersAuthTypeEnum = "OAUTH"
	ProvidersAuthTypeEnumCredentials    ProvidersAuthTypeEnum = "CREDENTIALS"
	ProvidersAuthTypeEnumMfaCredentials ProvidersAuthTypeEnum = "MFA_CREDENTIALS"
)

type ProvidersStatusEnum string

const (
	ProvidersStatusEnumSupported   ProvidersStatusEnum = "Supported"
	ProvidersStatusEnumBeta        ProvidersStatusEnum = "Beta"
	ProvidersStatusEnumUnsupported ProvidersStatusEnum = "Unsupported"
)

type Providers struct {
	PRIORITY               *ProvidersPriorityEnum       `json:"PRIORITY,omitempty"`
	AccountType            []ProvidersAccountTypeEnum   `json:"accountType,omitempty"`
	AssociatedProviderIds  []int64                      `json:"associatedProviderIds,omitempty"`
	AuthParameter          []ProvidersAuthParameterEnum `json:"authParameter,omitempty"`
	AuthType               *ProvidersAuthTypeEnum       `json:"authType,omitempty"`
	BaseURL                *string                      `json:"baseUrl,omitempty"`
	Capability             []Capability                 `json:"capability,omitempty"`
	CountryISOCode         *string                      `json:"countryISOCode,omitempty"`
	Dataset                []ProvidersDataset           `json:"dataset,omitempty"`
	Favicon                *string                      `json:"favicon,omitempty"`
	ForgetPasswordURL      *string                      `json:"forgetPasswordUrl,omitempty"`
	Help                   *string                      `json:"help,omitempty"`
	ID                     *int64                       `json:"id,omitempty"`
	IsAddedByUser          *string                      `json:"isAddedByUser,omitempty"`
	IsAutoRefreshEnabled   *bool                        `json:"isAutoRefreshEnabled,omitempty"`
	IsConsentRequired      *bool                        `json:"isConsentRequired,omitempty"`
	LanguageISOCode        *string                      `json:"languageISOCode,omitempty"`
	LastModified           *string                      `json:"lastModified,omitempty"`
	LoginHelp              *string                      `json:"loginHelp,omitempty"`
	LoginURL               *string                      `json:"loginUrl,omitempty"`
	Logo                   *string                      `json:"logo,omitempty"`
	Name                   *string                      `json:"name,omitempty"`
	PrimaryLanguageISOCode *string                      `json:"primaryLanguageISOCode,omitempty"`
	Status                 *ProvidersStatusEnum         `json:"status,omitempty"`
}
