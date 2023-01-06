package operations

import (
	"openapi/pkg/models/shared"
)

type ListCommonAreaPhonesQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListCommonAreaPhonesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesCallingPlans struct {
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

type ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum string

const (
	ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnumInternal ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum = "internal"
	ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnumExternal ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum = "external"
)

type ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbers struct {
	ID     *string                                                                       `json:"id,omitempty"`
	Number *string                                                                       `json:"number,omitempty"`
	Source *ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum `json:"source,omitempty"`
}

type ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListCommonAreaPhones200ApplicationJSONCommonAreaPhones struct {
	CallingPlans []ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesCallingPlans `json:"calling_plans,omitempty"`
	DeviceType   *string                                                              `json:"device_type,omitempty"`
	DisplayName  *string                                                              `json:"display_name,omitempty"`
	ID           *string                                                              `json:"id,omitempty"`
	MacAddress   *string                                                              `json:"mac_address,omitempty"`
	PhoneNumbers []ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbers `json:"phone_numbers,omitempty"`
	Site         *ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesSite          `json:"site,omitempty"`
	Status       *string                                                              `json:"status,omitempty"`
}

type ListCommonAreaPhones200ApplicationJSON struct {
	CommonAreaPhones []ListCommonAreaPhones200ApplicationJSONCommonAreaPhones `json:"common_area_phones,omitempty"`
	NextPageToken    *string                                                  `json:"next_page_token,omitempty"`
	PageSize         *int64                                                   `json:"page_size,omitempty"`
	TotalRecords     *int64                                                   `json:"total_records,omitempty"`
}

type ListCommonAreaPhonesRequest struct {
	QueryParams ListCommonAreaPhonesQueryParams
	Security    ListCommonAreaPhonesSecurity
}

type ListCommonAreaPhonesResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListCommonAreaPhones200ApplicationJSONObject *ListCommonAreaPhones200ApplicationJSON
}
