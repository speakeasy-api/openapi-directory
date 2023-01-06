package operations

type ListMeetingTemplatesPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ListMeetingTemplates200ApplicationJSONTemplates struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *int64  `json:"type,omitempty"`
}

type ListMeetingTemplates200ApplicationJSON struct {
	Templates    []ListMeetingTemplates200ApplicationJSONTemplates `json:"templates,omitempty"`
	TotalRecords *int64                                            `json:"total_records,omitempty"`
}

type ListMeetingTemplatesRequest struct {
	PathParams ListMeetingTemplatesPathParams
}

type ListMeetingTemplatesResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListMeetingTemplates200ApplicationJSONObject *ListMeetingTemplates200ApplicationJSON
}
