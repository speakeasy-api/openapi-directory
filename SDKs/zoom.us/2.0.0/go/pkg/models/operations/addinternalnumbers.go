package operations

type AddInternalNumbersPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum string

const (
	AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnumEnGb AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum = "en-GB"
	AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnumEnUs AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum = "en-US"
	AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnumDeDe AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum = "de-DE"
)

type AddInternalNumbersApplicationJSONInternalNumbers struct {
	AllowForExternalMeetings *bool                                                         `json:"allow_for_external_meetings,omitempty"`
	AllowJoin                *bool                                                         `json:"allow_join,omitempty"`
	Country                  string                                                        `json:"country"`
	DisplayNumber            string                                                        `json:"display_number"`
	Labels                   string                                                        `json:"labels"`
	Languages                AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum `json:"languages"`
	Number                   string                                                        `json:"number"`
	Type                     int64                                                         `json:"type"`
	Visible                  *bool                                                         `json:"visible,omitempty"`
}

type AddInternalNumbersApplicationJSON struct {
	InternalNumbers []AddInternalNumbersApplicationJSONInternalNumbers `json:"internal_numbers,omitempty"`
}

type AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum string

const (
	AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnumEnGb AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum = "en-GB"
	AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnumEnUs AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum = "en-US"
	AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnumDeDe AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum = "de-DE"
)

type AddInternalNumbersMultipartFormDataInternalNumbers struct {
	AllowForExternalMeetings *bool                                                           `json:"allow_for_external_meetings,omitempty"`
	AllowJoin                *bool                                                           `json:"allow_join,omitempty"`
	Country                  string                                                          `json:"country"`
	DisplayNumber            string                                                          `json:"display_number"`
	Labels                   string                                                          `json:"labels"`
	Languages                AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum `json:"languages"`
	Number                   string                                                          `json:"number"`
	Type                     int64                                                           `json:"type"`
	Visible                  *bool                                                           `json:"visible,omitempty"`
}

type AddInternalNumbersMultipartFormData1 struct {
	InternalNumbers []AddInternalNumbersMultipartFormDataInternalNumbers `multipartForm:"name=internal_numbers,json"`
}

type AddInternalNumbersRequests struct {
	Object  *AddInternalNumbersApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AddInternalNumbersMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum string

const (
	AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnumEnGb AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum = "en-GB"
	AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnumEnUs AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum = "en-US"
	AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnumDeDe AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum = "de-DE"
)

type AddInternalNumbers201ApplicationJSONInternalNumbers struct {
	AllowForExternalMeetings *bool                                                            `json:"allow_for_external_meetings,omitempty"`
	AllowJoin                *bool                                                            `json:"allow_join,omitempty"`
	Country                  string                                                           `json:"country"`
	DisplayNumber            string                                                           `json:"display_number"`
	ID                       *string                                                          `json:"id,omitempty"`
	Labels                   string                                                           `json:"labels"`
	Languages                AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum `json:"languages"`
	Number                   string                                                           `json:"number"`
	Type                     int64                                                            `json:"type"`
	Visible                  *bool                                                            `json:"visible,omitempty"`
}

type AddInternalNumbers201ApplicationJSON struct {
	InternalNumbers []AddInternalNumbers201ApplicationJSONInternalNumbers `json:"internal_numbers,omitempty"`
}

type AddInternalNumbersRequest struct {
	PathParams AddInternalNumbersPathParams
	Request    *AddInternalNumbersRequests
}

type AddInternalNumbersResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	AddInternalNumbers201ApplicationJSONObject *AddInternalNumbers201ApplicationJSON
}
