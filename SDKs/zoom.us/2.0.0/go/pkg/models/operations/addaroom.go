package operations

import (
	"openapi/pkg/models/shared"
)

type AddARoomApplicationJSONTypeEnum string

const (
	AddARoomApplicationJSONTypeEnumZoomRoom              AddARoomApplicationJSONTypeEnum = "ZoomRoom"
	AddARoomApplicationJSONTypeEnumSchedulingDisplayOnly AddARoomApplicationJSONTypeEnum = "SchedulingDisplayOnly"
	AddARoomApplicationJSONTypeEnumDigitalSignageOnly    AddARoomApplicationJSONTypeEnum = "DigitalSignageOnly"
)

type AddARoomApplicationJSON struct {
	LocationID *string                         `json:"location_id,omitempty"`
	Name       string                          `json:"name"`
	Type       AddARoomApplicationJSONTypeEnum `json:"type"`
}

type AddARoomMultipartFormDataTypeEnum string

const (
	AddARoomMultipartFormDataTypeEnumZoomRoom              AddARoomMultipartFormDataTypeEnum = "ZoomRoom"
	AddARoomMultipartFormDataTypeEnumSchedulingDisplayOnly AddARoomMultipartFormDataTypeEnum = "SchedulingDisplayOnly"
	AddARoomMultipartFormDataTypeEnumDigitalSignageOnly    AddARoomMultipartFormDataTypeEnum = "DigitalSignageOnly"
)

type AddARoomMultipartFormData struct {
	LocationID *string                           `multipartForm:"name=location_id"`
	Name       string                            `multipartForm:"name=name"`
	Type       AddARoomMultipartFormDataTypeEnum `multipartForm:"name=type"`
}

type AddARoomRequests struct {
	Object  *AddARoomApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddARoomMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddARoomSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddARoom201ApplicationJSONTypeEnum string

const (
	AddARoom201ApplicationJSONTypeEnumZoomRoom              AddARoom201ApplicationJSONTypeEnum = "ZoomRoom"
	AddARoom201ApplicationJSONTypeEnumSchedulingDisplayOnly AddARoom201ApplicationJSONTypeEnum = "SchedulingDisplayOnly"
	AddARoom201ApplicationJSONTypeEnumDigitalSignageOnly    AddARoom201ApplicationJSONTypeEnum = "DigitalSignageOnly"
)

type AddARoom201ApplicationJSON struct {
	ID         *string                             `json:"id,omitempty"`
	LocationID *string                             `json:"location_id,omitempty"`
	Name       *string                             `json:"name,omitempty"`
	RoomID     *string                             `json:"room_id,omitempty"`
	Type       *AddARoom201ApplicationJSONTypeEnum `json:"type,omitempty"`
}

type AddARoomRequest struct {
	Request  *AddARoomRequests
	Security AddARoomSecurity
}

type AddARoomResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	AddARoom201ApplicationJSONObject *AddARoom201ApplicationJSON
}
