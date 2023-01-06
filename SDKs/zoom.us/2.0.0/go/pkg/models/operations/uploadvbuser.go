package operations

type UploadVBuserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UploadVBuserRequestBody struct {
	File *string `multipartForm:"name=file"`
}

type UploadVBuser201ApplicationJSON struct {
	ID        *string `json:"id,omitempty"`
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Size      *string `json:"size,omitempty"`
	Type      *string `json:"type,omitempty"`
}

type UploadVBuserRequest struct {
	PathParams UploadVBuserPathParams
	Request    *UploadVBuserRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadVBuserResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	UploadVBuser201ApplicationJSONObject *UploadVBuser201ApplicationJSON
}
