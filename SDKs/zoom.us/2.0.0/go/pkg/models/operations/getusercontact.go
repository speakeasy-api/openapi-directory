package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserContactPathParams struct {
	ContactID string `pathParam:"style=simple,explode=false,name=contactId"`
}

type GetUserContactQueryParams struct {
	QueryPresenceStatus *bool `queryParam:"style=form,explode=true,name=query_presence_status"`
}

type GetUserContactSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetUserContact200ApplicationJSONPresenceStatusEnum string

const (
	GetUserContact200ApplicationJSONPresenceStatusEnumDoNotDisturb GetUserContact200ApplicationJSONPresenceStatusEnum = "Do_Not_Disturb"
	GetUserContact200ApplicationJSONPresenceStatusEnumAway         GetUserContact200ApplicationJSONPresenceStatusEnum = "Away"
	GetUserContact200ApplicationJSONPresenceStatusEnumAvailable    GetUserContact200ApplicationJSONPresenceStatusEnum = "Available"
	GetUserContact200ApplicationJSONPresenceStatusEnumOffline      GetUserContact200ApplicationJSONPresenceStatusEnum = "Offline"
)

type GetUserContact200ApplicationJSON struct {
	DirectNumbers   []string                                            `json:"direct_numbers,omitempty"`
	Email           *string                                             `json:"email,omitempty"`
	ExtensionNumber *string                                             `json:"extension_number,omitempty"`
	FirstName       *string                                             `json:"first_name,omitempty"`
	ID              *string                                             `json:"id,omitempty"`
	LastName        *string                                             `json:"last_name,omitempty"`
	PhoneNumber     *string                                             `json:"phone_number,omitempty"`
	PresenceStatus  *GetUserContact200ApplicationJSONPresenceStatusEnum `json:"presence_status,omitempty"`
}

type GetUserContactRequest struct {
	PathParams  GetUserContactPathParams
	QueryParams GetUserContactQueryParams
	Security    GetUserContactSecurity
}

type GetUserContactResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	GetUserContact200ApplicationJSONObject *GetUserContact200ApplicationJSON
}
