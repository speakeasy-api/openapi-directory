package operations

import (
	"openapi/pkg/models/shared"
)

type ListSipTrunkNumbersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListSipTrunkNumbers200ApplicationJSONPhoneNumbers struct {
	Country *string `json:"country,omitempty"`
	Number  *string `json:"number,omitempty"`
}

type ListSipTrunkNumbers200ApplicationJSON struct {
	PhoneNumbers []ListSipTrunkNumbers200ApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
	TotalRecords *int64                                              `json:"total_records,omitempty"`
}

type ListSipTrunkNumbersRequest struct {
	Security ListSipTrunkNumbersSecurity
}

type ListSipTrunkNumbersResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	ListSipTrunkNumbers200ApplicationJSONObject *ListSipTrunkNumbers200ApplicationJSON
}
