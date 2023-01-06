package operations

import (
	"openapi/pkg/models/shared"
)

type AccountManagedDomainPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountManagedDomainSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AccountManagedDomain200ApplicationJSONDomains struct {
	Domain *string `json:"domain,omitempty"`
	Status *string `json:"status,omitempty"`
}

// AccountManagedDomain200ApplicationJSON
// List of managed domains.
type AccountManagedDomain200ApplicationJSON struct {
	Domains      []AccountManagedDomain200ApplicationJSONDomains `json:"domains,omitempty"`
	TotalRecords *int64                                          `json:"total_records,omitempty"`
}

type AccountManagedDomainRequest struct {
	PathParams AccountManagedDomainPathParams
	Security   AccountManagedDomainSecurity
}

type AccountManagedDomainResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	AccountManagedDomain200ApplicationJSONObject *AccountManagedDomain200ApplicationJSON
}
