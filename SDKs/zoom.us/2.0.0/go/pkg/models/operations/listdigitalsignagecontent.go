package operations

type ListDigitalSignageContentQueryParams struct {
	FolderID      *string `queryParam:"style=form,explode=true,name=folder_id"`
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Type          *string `queryParam:"style=form,explode=true,name=type"`
}

type ListDigitalSignageContent200ApplicationJSONContents struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListDigitalSignageContent200ApplicationJSON struct {
	Contents      []ListDigitalSignageContent200ApplicationJSONContents `json:"contents,omitempty"`
	NextPageToken *string                                               `json:"next_page_token,omitempty"`
	PageSize      *int64                                                `json:"page_size,omitempty"`
}

type ListDigitalSignageContentRequest struct {
	QueryParams ListDigitalSignageContentQueryParams
}

type ListDigitalSignageContentResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	ListDigitalSignageContent200ApplicationJSONObject *ListDigitalSignageContent200ApplicationJSON
}
