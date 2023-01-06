package shared

type ProviderAccountPreferences struct {
	IsAutoRefreshEnabled    *bool  `json:"isAutoRefreshEnabled,omitempty"`
	IsDataExtractsEnabled   *bool  `json:"isDataExtractsEnabled,omitempty"`
	LinkedProviderAccountID *int64 `json:"linkedProviderAccountId,omitempty"`
}
