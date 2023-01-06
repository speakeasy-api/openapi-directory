package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserContactsQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Type          *string `queryParam:"style=form,explode=true,name=type"`
}

type GetUserContactsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetUserContacts200ApplicationJSONContacts struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
}

type GetUserContacts200ApplicationJSON struct {
	Contacts      []GetUserContacts200ApplicationJSONContacts `json:"contacts,omitempty"`
	NextPageToken *string                                     `json:"next_page_token,omitempty"`
	PageSize      *int64                                      `json:"page_size,omitempty"`
}

type GetUserContactsRequest struct {
	QueryParams GetUserContactsQueryParams
	Security    GetUserContactsSecurity
}

type GetUserContactsResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	GetUserContacts200ApplicationJSONObject *GetUserContacts200ApplicationJSON
}
