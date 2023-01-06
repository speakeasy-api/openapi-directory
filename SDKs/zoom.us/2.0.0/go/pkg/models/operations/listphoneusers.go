package operations

import (
	"openapi/pkg/models/shared"
)

type ListPhoneUsersQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	SiteID        *string `queryParam:"style=form,explode=true,name=site_id"`
}

type ListPhoneUsersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListPhoneUsers200ApplicationJSONUsersCallingPlans struct {
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ListPhoneUsers200ApplicationJSONUsersSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListPhoneUsers200ApplicationJSONUsers struct {
	CallingPlans    []ListPhoneUsers200ApplicationJSONUsersCallingPlans `json:"calling_plans,omitempty"`
	Email           *string                                             `json:"email,omitempty"`
	ExtensionNumber *int64                                              `json:"extension_number,omitempty"`
	ID              *string                                             `json:"id,omitempty"`
	Name            *string                                             `json:"name,omitempty"`
	PhoneUserID     *string                                             `json:"phone_user_id,omitempty"`
	Site            *ListPhoneUsers200ApplicationJSONUsersSite          `json:"site,omitempty"`
	Status          *string                                             `json:"status,omitempty"`
}

type ListPhoneUsers200ApplicationJSON struct {
	NextPageToken *string                                 `json:"next_page_token,omitempty"`
	PageSize      *int64                                  `json:"page_size,omitempty"`
	TotalRecords  *int64                                  `json:"total_records,omitempty"`
	Users         []ListPhoneUsers200ApplicationJSONUsers `json:"users,omitempty"`
}

type ListPhoneUsersRequest struct {
	QueryParams ListPhoneUsersQueryParams
	Security    ListPhoneUsersSecurity
}

type ListPhoneUsersResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	ListPhoneUsers200ApplicationJSONObject *ListPhoneUsers200ApplicationJSON
}
