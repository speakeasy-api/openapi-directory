package operations

type AddAutoReceptionistApplicationJSON struct {
	Name   string  `json:"name"`
	SiteID *string `json:"site_id,omitempty"`
}

type AddAutoReceptionistMultipartFormData struct {
	Name   string  `multipartForm:"name=name"`
	SiteID *string `multipartForm:"name=site_id"`
}

type AddAutoReceptionistRequests struct {
	Object  *AddAutoReceptionistApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddAutoReceptionistMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddAutoReceptionist201ApplicationJSON struct {
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	ID              *string `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
}

type AddAutoReceptionistRequest struct {
	Request *AddAutoReceptionistRequests
}

type AddAutoReceptionistResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	AddAutoReceptionist201ApplicationJSONObject *AddAutoReceptionist201ApplicationJSON
}
