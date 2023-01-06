package operations

type ListSharedLineGroupsQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum string

const (
	ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnumPending   ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum = "pending"
	ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnumAvailable ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum = "available"
)

type ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers struct {
	ID     *string                                                                       `json:"id,omitempty"`
	Number *string                                                                       `json:"number,omitempty"`
	Status *ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum `json:"status,omitempty"`
}

type ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum string

const (
	ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnumActive   ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum = "active"
	ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnumInactive ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum = "inactive"
)

type ListSharedLineGroups200ApplicationJSONSharedLineGroups struct {
	DisplayName     *string                                                              `json:"display_name,omitempty"`
	ExtensionNumber *int64                                                               `json:"extension_number,omitempty"`
	ID              *string                                                              `json:"id,omitempty"`
	PhoneNumbers    []ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers `json:"phone_numbers,omitempty"`
	Site            *ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite          `json:"site,omitempty"`
	Status          *ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum    `json:"status,omitempty"`
}

type ListSharedLineGroups200ApplicationJSON struct {
	NextPageToken    *string                                                  `json:"next_page_token,omitempty"`
	PageSize         *int64                                                   `json:"page_size,omitempty"`
	SharedLineGroups []ListSharedLineGroups200ApplicationJSONSharedLineGroups `json:"shared_line_groups,omitempty"`
	TotalRecords     *int64                                                   `json:"total_records,omitempty"`
}

type ListSharedLineGroupsRequest struct {
	QueryParams ListSharedLineGroupsQueryParams
}

type ListSharedLineGroupsResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListSharedLineGroups200ApplicationJSONObject *ListSharedLineGroups200ApplicationJSON
}
