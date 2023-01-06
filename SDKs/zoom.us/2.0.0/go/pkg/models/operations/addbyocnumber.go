package operations

type AddByocNumberApplicationJSON struct {
	Carrier      string   `json:"carrier"`
	PhoneNumbers []string `json:"phone_numbers"`
	SiteID       *string  `json:"site_id,omitempty"`
}

type AddByocNumberMultipartFormData struct {
	Carrier      string   `multipartForm:"name=carrier"`
	PhoneNumbers []string `multipartForm:"name=phone_numbers,json"`
	SiteID       *string  `multipartForm:"name=site_id"`
}

type AddByocNumberRequests struct {
	Object  *AddByocNumberApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddByocNumberMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddByocNumber201ApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type AddByocNumber201ApplicationJSON struct {
	PhoneNumbers []AddByocNumber201ApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
}

type AddByocNumberRequest struct {
	Request *AddByocNumberRequests
}

type AddByocNumberResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	AddBYOCNumber201ApplicationJSONObject *AddByocNumber201ApplicationJSON
}
