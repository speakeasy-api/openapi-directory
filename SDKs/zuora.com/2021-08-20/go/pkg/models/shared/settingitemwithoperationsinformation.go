package shared

type SettingItemWithOperationsInformationContextEnum string

const (
	SettingItemWithOperationsInformationContextEnumTenant SettingItemWithOperationsInformationContextEnum = "Tenant"
	SettingItemWithOperationsInformationContextEnumEntity SettingItemWithOperationsInformationContextEnum = "Entity"
	SettingItemWithOperationsInformationContextEnumUser   SettingItemWithOperationsInformationContextEnum = "User"
	SettingItemWithOperationsInformationContextEnumNone   SettingItemWithOperationsInformationContextEnum = "None"
)

type SettingItemWithOperationsInformation struct {
	Context        *SettingItemWithOperationsInformationContextEnum `json:"context,omitempty"`
	Description    *string                                          `json:"description,omitempty"`
	HTTPOperations []SettingItemHTTPOperation                       `json:"httpOperations,omitempty"`
	Key            *string                                          `json:"key,omitempty"`
	PathPattern    *string                                          `json:"pathPattern,omitempty"`
}
