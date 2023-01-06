package operations

type ListInternalNumbersPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ListInternalNumbersQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum string

const (
	ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnumEnGb ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum = "en-GB"
	ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnumEnUs ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum = "en-US"
	ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnumDeDe ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum = "de-DE"
)

type ListInternalNumbers200ApplicationJSONInternalNumbers struct {
	AllowForExternalMeetings *bool                                                             `json:"allow_for_external_meetings,omitempty"`
	AllowJoin                *bool                                                             `json:"allow_join,omitempty"`
	Country                  string                                                            `json:"country"`
	DisplayNumber            string                                                            `json:"display_number"`
	Labels                   string                                                            `json:"labels"`
	Languages                ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum `json:"languages"`
	Number                   string                                                            `json:"number"`
	Type                     int64                                                             `json:"type"`
	Visible                  *bool                                                             `json:"visible,omitempty"`
}

type ListInternalNumbers200ApplicationJSON struct {
	InternalNumbers []ListInternalNumbers200ApplicationJSONInternalNumbers `json:"internal_numbers,omitempty"`
	NextPageToken   *string                                                `json:"next_page_token,omitempty"`
	PageSize        *int64                                                 `json:"page_size,omitempty"`
	TotalRecords    *int64                                                 `json:"total_records,omitempty"`
}

type ListInternalNumbersRequest struct {
	PathParams  ListInternalNumbersPathParams
	QueryParams ListInternalNumbersQueryParams
}

type ListInternalNumbersResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	ListInternalNumbers200ApplicationJSONObject *ListInternalNumbers200ApplicationJSON
}
