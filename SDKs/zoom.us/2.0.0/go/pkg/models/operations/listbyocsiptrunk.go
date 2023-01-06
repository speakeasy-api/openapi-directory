package operations

import (
	"openapi/pkg/models/shared"
)

type ListByocsipTrunkQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListByocsipTrunkSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListByocsipTrunk200ApplicationJSONByocSipTrunk struct {
	Carrier        *string `json:"carrier,omitempty"`
	CarrierAccount *string `json:"carrier_account,omitempty"`
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	Region         *string `json:"region,omitempty"`
	SbcLabel       *string `json:"sbc_label,omitempty"`
}

type ListByocsipTrunk200ApplicationJSON struct {
	ByocSipTrunk  []ListByocsipTrunk200ApplicationJSONByocSipTrunk `json:"byoc_sip_trunk,omitempty"`
	NextPageToken *string                                          `json:"next_page_token,omitempty"`
	PageSize      *int64                                           `json:"page_size,omitempty"`
}

type ListByocsipTrunkRequest struct {
	QueryParams ListByocsipTrunkQueryParams
	Security    ListByocsipTrunkSecurity
}

type ListByocsipTrunkResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	ListBYOCSIPTrunk200ApplicationJSONObject *ListByocsipTrunk200ApplicationJSON
}
