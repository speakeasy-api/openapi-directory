package operations

type ListWebinarTemplatesPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ListWebinarTemplates200ApplicationJSONTemplates struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListWebinarTemplates200ApplicationJSON struct {
	Templates    []ListWebinarTemplates200ApplicationJSONTemplates `json:"templates,omitempty"`
	TotalRecords *int64                                            `json:"total_records,omitempty"`
}

type ListWebinarTemplatesRequest struct {
	PathParams ListWebinarTemplatesPathParams
}

type ListWebinarTemplatesResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListWebinarTemplates200ApplicationJSONObject *ListWebinarTemplates200ApplicationJSON
}
