package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UsersStatusEnum string

const (
	UsersStatusEnumActive   UsersStatusEnum = "active"
	UsersStatusEnumInactive UsersStatusEnum = "inactive"
	UsersStatusEnumPending  UsersStatusEnum = "pending"
)

type UsersQueryParams struct {
	IncludeFields *string          `queryParam:"style=form,explode=true,name=include_fields"`
	NextPageToken *string          `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *string          `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64           `queryParam:"style=form,explode=true,name=page_size"`
	RoleID        *string          `queryParam:"style=form,explode=true,name=role_id"`
	Status        *UsersStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type UsersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type Users200ApplicationJSONUsersCustomAttributes struct {
	Key   *string `json:"key,omitempty"`
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type Users200ApplicationJSONUsers struct {
	CreatedAt         *time.Time                                     `json:"created_at,omitempty"`
	CustomAttributes  []Users200ApplicationJSONUsersCustomAttributes `json:"custom_attributes,omitempty"`
	Dept              *string                                        `json:"dept,omitempty"`
	Email             string                                         `json:"email"`
	FirstName         *string                                        `json:"first_name,omitempty"`
	GroupIds          []string                                       `json:"group_ids,omitempty"`
	HostKey           *string                                        `json:"host_key,omitempty"`
	ID                *string                                        `json:"id,omitempty"`
	ImGroupIds        []string                                       `json:"im_group_ids,omitempty"`
	LastClientVersion *string                                        `json:"last_client_version,omitempty"`
	LastLoginTime     *time.Time                                     `json:"last_login_time,omitempty"`
	LastName          *string                                        `json:"last_name,omitempty"`
	PlanUnitedType    *string                                        `json:"plan_united_type,omitempty"`
	Pmi               *int64                                         `json:"pmi,omitempty"`
	RoleID            *string                                        `json:"role_id,omitempty"`
	Status            *string                                        `json:"status,omitempty"`
	Timezone          *string                                        `json:"timezone,omitempty"`
	Type              int64                                          `json:"type"`
	Verified          *int64                                         `json:"verified,omitempty"`
}

type Users200ApplicationJSON struct {
	NextPageToken *string                        `json:"next_page_token,omitempty"`
	PageCount     *int64                         `json:"page_count,omitempty"`
	PageNumber    *int64                         `json:"page_number,omitempty"`
	PageSize      *int64                         `json:"page_size,omitempty"`
	TotalRecords  *int64                         `json:"total_records,omitempty"`
	Users         []Users200ApplicationJSONUsers `json:"users,omitempty"`
}

type UsersRequest struct {
	QueryParams UsersQueryParams
	Security    UsersSecurity
}

type UsersResponse struct {
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
	Users200ApplicationJSONObject *Users200ApplicationJSON
}
