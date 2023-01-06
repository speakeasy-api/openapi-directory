package operations

type UploadGroupVbPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type UploadGroupVbQueryParams struct {
	FileIds *string `queryParam:"style=form,explode=true,name=file_ids"`
}

type UploadGroupVbRequestBody struct {
	File *string `multipartForm:"name=file"`
}

type UploadGroupVb201ApplicationJSON struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

type UploadGroupVbRequest struct {
	PathParams  UploadGroupVbPathParams
	QueryParams UploadGroupVbQueryParams
	Request     *UploadGroupVbRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadGroupVbResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	UploadGroupVB201ApplicationJSONObject *UploadGroupVb201ApplicationJSON
}
