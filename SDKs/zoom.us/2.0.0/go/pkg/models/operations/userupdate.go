package operations

type UserUpdatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserUpdateLoginTypeEnum string

const (
	UserUpdateLoginTypeEnumZero             UserUpdateLoginTypeEnum = "0"
	UserUpdateLoginTypeEnumOne              UserUpdateLoginTypeEnum = "1"
	UserUpdateLoginTypeEnumNinetyNine       UserUpdateLoginTypeEnum = "99"
	UserUpdateLoginTypeEnumOneHundred       UserUpdateLoginTypeEnum = "100"
	UserUpdateLoginTypeEnumOneHundredAndOne UserUpdateLoginTypeEnum = "101"
)

type UserUpdateQueryParams struct {
	LoginType *UserUpdateLoginTypeEnum `queryParam:"style=form,explode=true,name=login_type"`
}

// UserUpdateApplicationJSONCustomAttributes
// Custom attribute(s) of the user.
type UserUpdateApplicationJSONCustomAttributes struct {
	Key   *string `json:"key,omitempty"`
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type UserUpdateApplicationJSONPhoneNumbers struct {
	Code    *string `json:"code,omitempty"`
	Country *string `json:"country,omitempty"`
	Number  *string `json:"number,omitempty"`
}

// UserUpdateApplicationJSON
// The user update object represents a user on Zoom.
type UserUpdateApplicationJSON struct {
	CmsUserID        *string                                    `json:"cms_user_id,omitempty"`
	Company          *string                                    `json:"company,omitempty"`
	CustomAttributes *UserUpdateApplicationJSONCustomAttributes `json:"custom_attributes,omitempty"`
	Dept             *string                                    `json:"dept,omitempty"`
	FirstName        *string                                    `json:"first_name,omitempty"`
	GroupID          *string                                    `json:"group_id,omitempty"`
	HostKey          *string                                    `json:"host_key,omitempty"`
	JobTitle         *string                                    `json:"job_title,omitempty"`
	Language         *string                                    `json:"language,omitempty"`
	LastName         *string                                    `json:"last_name,omitempty"`
	Location         *string                                    `json:"location,omitempty"`
	Manager          *string                                    `json:"manager,omitempty"`
	PhoneCountry     *string                                    `json:"phone_country,omitempty"`
	PhoneNumber      *string                                    `json:"phone_number,omitempty"`
	PhoneNumbers     *UserUpdateApplicationJSONPhoneNumbers     `json:"phone_numbers,omitempty"`
	Pmi              *int64                                     `json:"pmi,omitempty"`
	Timezone         *string                                    `json:"timezone,omitempty"`
	Type             *int64                                     `json:"type,omitempty"`
	UsePmi           *bool                                      `json:"use_pmi,omitempty"`
	VanityName       *string                                    `json:"vanity_name,omitempty"`
}

// UserUpdateMultipartFormDataCustomAttributes
// Custom attribute(s) of the user.
type UserUpdateMultipartFormDataCustomAttributes struct {
	Key   *string `json:"key,omitempty"`
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type UserUpdateMultipartFormDataPhoneNumbers struct {
	Code    *string `json:"code,omitempty"`
	Country *string `json:"country,omitempty"`
	Number  *string `json:"number,omitempty"`
}

// UserUpdateMultipartFormData
// The user update object represents a user on Zoom.
type UserUpdateMultipartFormData struct {
	CmsUserID        *string                                      `multipartForm:"name=cms_user_id"`
	Company          *string                                      `multipartForm:"name=company"`
	CustomAttributes *UserUpdateMultipartFormDataCustomAttributes `multipartForm:"name=custom_attributes,json"`
	Dept             *string                                      `multipartForm:"name=dept"`
	FirstName        *string                                      `multipartForm:"name=first_name"`
	GroupID          *string                                      `multipartForm:"name=group_id"`
	HostKey          *string                                      `multipartForm:"name=host_key"`
	JobTitle         *string                                      `multipartForm:"name=job_title"`
	Language         *string                                      `multipartForm:"name=language"`
	LastName         *string                                      `multipartForm:"name=last_name"`
	Location         *string                                      `multipartForm:"name=location"`
	Manager          *string                                      `multipartForm:"name=manager"`
	PhoneCountry     *string                                      `multipartForm:"name=phone_country"`
	PhoneNumber      *string                                      `multipartForm:"name=phone_number"`
	PhoneNumbers     *UserUpdateMultipartFormDataPhoneNumbers     `multipartForm:"name=phone_numbers,json"`
	Pmi              *int64                                       `multipartForm:"name=pmi"`
	Timezone         *string                                      `multipartForm:"name=timezone"`
	Type             *int64                                       `multipartForm:"name=type"`
	UsePmi           *bool                                        `multipartForm:"name=use_pmi"`
	VanityName       *string                                      `multipartForm:"name=vanity_name"`
}

type UserUpdateRequests struct {
	Object  *UserUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UserUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UserUpdateRequest struct {
	PathParams  UserUpdatePathParams
	QueryParams UserUpdateQueryParams
	Request     UserUpdateRequests
}

type UserUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
