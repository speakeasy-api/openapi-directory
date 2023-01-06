package operations

type ManageE911signageRequests struct {
	Object  map[string]interface{} `request:"mediaType=application/json"`
	Object1 map[string]interface{} `request:"mediaType=multipart/form-data"`
}

type ManageE911signage202ApplicationJSON struct {
	EventID *string `json:"event_id,omitempty"`
}

type ManageE911signageRequest struct {
	Request *ManageE911signageRequests
}

type ManageE911signageResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	ManageE911signage202ApplicationJSONObject *ManageE911signage202ApplicationJSON
}
