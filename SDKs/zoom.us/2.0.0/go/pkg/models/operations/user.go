package operations

import (
	"time"
)

type UserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserLoginTypeEnum string

const (
	UserLoginTypeEnumZero             UserLoginTypeEnum = "0"
	UserLoginTypeEnumOne              UserLoginTypeEnum = "1"
	UserLoginTypeEnumNinetyNine       UserLoginTypeEnum = "99"
	UserLoginTypeEnumOneHundred       UserLoginTypeEnum = "100"
	UserLoginTypeEnumOneHundredAndOne UserLoginTypeEnum = "101"
)

type UserQueryParams struct {
	LoginType *UserLoginTypeEnum `queryParam:"style=form,explode=true,name=login_type"`
}

// User200ApplicationJSONCustomAttributes
// Custom attribute(s) that have been assigned to the user.
type User200ApplicationJSONCustomAttributes struct {
	Key   *string `json:"key,omitempty"`
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type User200ApplicationJSONPhoneNumbers struct {
	Code     *string `json:"code,omitempty"`
	Country  *string `json:"country,omitempty"`
	Number   *string `json:"number,omitempty"`
	Verified *bool   `json:"verified,omitempty"`
}

type User200ApplicationJSONStatusEnum string

const (
	User200ApplicationJSONStatusEnumPending  User200ApplicationJSONStatusEnum = "pending"
	User200ApplicationJSONStatusEnumActive   User200ApplicationJSONStatusEnum = "active"
	User200ApplicationJSONStatusEnumInactive User200ApplicationJSONStatusEnum = "inactive"
)

// User200ApplicationJSON
// The user object represents a specific user on Zoom.
type User200ApplicationJSON struct {
	AccountID          *string                                 `json:"account_id,omitempty"`
	CmsUserID          *string                                 `json:"cms_user_id,omitempty"`
	Company            *string                                 `json:"company,omitempty"`
	CreatedAt          *time.Time                              `json:"created_at,omitempty"`
	CustomAttributes   *User200ApplicationJSONCustomAttributes `json:"custom_attributes,omitempty"`
	Dept               *string                                 `json:"dept,omitempty"`
	Email              string                                  `json:"email"`
	FirstName          *string                                 `json:"first_name,omitempty"`
	GroupIds           []string                                `json:"group_ids,omitempty"`
	HostKey            *string                                 `json:"host_key,omitempty"`
	ID                 *string                                 `json:"id,omitempty"`
	ImGroupIds         []string                                `json:"im_group_ids,omitempty"`
	Jid                *string                                 `json:"jid,omitempty"`
	JobTitle           *string                                 `json:"job_title,omitempty"`
	Language           *string                                 `json:"language,omitempty"`
	LastClientVersion  *string                                 `json:"last_client_version,omitempty"`
	LastLoginTime      *time.Time                              `json:"last_login_time,omitempty"`
	LastName           *string                                 `json:"last_name,omitempty"`
	Location           *string                                 `json:"location,omitempty"`
	LoginType          *int64                                  `json:"login_type,omitempty"`
	Manager            *string                                 `json:"manager,omitempty"`
	PersonalMeetingURL *string                                 `json:"personal_meeting_url,omitempty"`
	PhoneCountry       *string                                 `json:"phone_country,omitempty"`
	PhoneNumber        *string                                 `json:"phone_number,omitempty"`
	PhoneNumbers       *User200ApplicationJSONPhoneNumbers     `json:"phone_numbers,omitempty"`
	PicURL             *string                                 `json:"pic_url,omitempty"`
	PlanUnitedType     *string                                 `json:"plan_united_type,omitempty"`
	Pmi                *int64                                  `json:"pmi,omitempty"`
	RoleID             *string                                 `json:"role_id,omitempty"`
	RoleName           *string                                 `json:"role_name,omitempty"`
	Status             *User200ApplicationJSONStatusEnum       `json:"status,omitempty"`
	Timezone           *string                                 `json:"timezone,omitempty"`
	Type               int64                                   `json:"type"`
	UsePmi             *bool                                   `json:"use_pmi,omitempty"`
	VanityURL          *string                                 `json:"vanity_url,omitempty"`
	Verified           *int64                                  `json:"verified,omitempty"`
}

type UserRequest struct {
	PathParams  UserPathParams
	QueryParams UserQueryParams
}

type UserResponse struct {
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
	User200ApplicationJSONObject *User200ApplicationJSON
}
