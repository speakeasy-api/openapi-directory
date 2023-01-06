package operations

type UploadVbPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type UploadVbRequestBody struct {
	File *string `multipartForm:"name=file"`
}

type UploadVb201ApplicationJSON struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

type UploadVbRequest struct {
	PathParams UploadVbPathParams
	Request    *UploadVbRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadVbResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	UploadVB201ApplicationJSONObject *UploadVb201ApplicationJSON
}
