package operations

type SearchCompanyContactsQueryParams struct {
	NextPageToken       *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize            *int64  `queryParam:"style=form,explode=true,name=page_size"`
	QueryPresenceStatus *string `queryParam:"style=form,explode=true,name=query_presence_status"`
	SearchKey           string  `queryParam:"style=form,explode=true,name=search_key"`
}

type SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum string

const (
	SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnumDoNotDisturb SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum = "Do_Not_Disturb"
	SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnumAway         SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum = "Away"
	SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnumAvailable    SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum = "Available"
	SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnumOffline      SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum = "Offline"
)

type SearchCompanyContacts200ApplicationJSONContacts struct {
	Dept            *string                                                            `json:"dept,omitempty"`
	DirectNumbers   []string                                                           `json:"direct_numbers,omitempty"`
	Email           *string                                                            `json:"email,omitempty"`
	ExtensionNumber *string                                                            `json:"extension_number,omitempty"`
	FirstName       *string                                                            `json:"first_name,omitempty"`
	ID              *string                                                            `json:"id,omitempty"`
	ImGroupID       *string                                                            `json:"im_group_id,omitempty"`
	ImGroupName     *string                                                            `json:"im_group_name,omitempty"`
	JobTitle        *string                                                            `json:"job_title,omitempty"`
	LastName        *string                                                            `json:"last_name,omitempty"`
	Location        *string                                                            `json:"location,omitempty"`
	PhoneNumber     *string                                                            `json:"phone_number,omitempty"`
	PresenceStatus  *SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum `json:"presence_status,omitempty"`
	SipPhoneNumber  *string                                                            `json:"sip_phone_number,omitempty"`
}

type SearchCompanyContacts200ApplicationJSON struct {
	Contacts      []SearchCompanyContacts200ApplicationJSONContacts `json:"contacts,omitempty"`
	NextPageToken *string                                           `json:"next_page_token,omitempty"`
	PageSize      *int64                                            `json:"page_size,omitempty"`
}

type SearchCompanyContactsRequest struct {
	QueryParams SearchCompanyContactsQueryParams
}

type SearchCompanyContactsResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	SearchCompanyContacts200ApplicationJSONObject *SearchCompanyContacts200ApplicationJSON
}
