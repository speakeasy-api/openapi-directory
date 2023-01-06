package operations

import (
	"openapi/pkg/models/shared"
)

type AddAzrLocationApplicationJSON struct {
	Name             *string `json:"name,omitempty"`
	ParentLocationID *string `json:"parent_location_id,omitempty"`
}

type AddAzrLocationMultipartFormData struct {
	Name             *string `multipartForm:"name=name"`
	ParentLocationID *string `multipartForm:"name=parent_location_id"`
}

type AddAzrLocationRequests struct {
	Object  *AddAzrLocationApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddAzrLocationMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddAzrLocationSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddAzrLocation200ApplicationJSONTypeEnum string

const (
	AddAZRLocation200ApplicationJSONTypeEnumCountry  AddAzrLocation200ApplicationJSONTypeEnum = "country"
	AddAZRLocation200ApplicationJSONTypeEnumStates   AddAzrLocation200ApplicationJSONTypeEnum = "states"
	AddAZRLocation200ApplicationJSONTypeEnumCity     AddAzrLocation200ApplicationJSONTypeEnum = "city"
	AddAZRLocation200ApplicationJSONTypeEnumCampus   AddAzrLocation200ApplicationJSONTypeEnum = "campus"
	AddAZRLocation200ApplicationJSONTypeEnumBuilding AddAzrLocation200ApplicationJSONTypeEnum = "building"
	AddAZRLocation200ApplicationJSONTypeEnumFloor    AddAzrLocation200ApplicationJSONTypeEnum = "floor"
)

type AddAzrLocation200ApplicationJSON struct {
	ID               *string                                   `json:"id,omitempty"`
	Name             *string                                   `json:"name,omitempty"`
	ParentLocationID *string                                   `json:"parent_location_id,omitempty"`
	Type             *AddAzrLocation200ApplicationJSONTypeEnum `json:"type,omitempty"`
}

type AddAzrLocationRequest struct {
	Request  *AddAzrLocationRequests
	Security AddAzrLocationSecurity
}

type AddAzrLocationResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	AddAZRLocation200ApplicationJSONObject *AddAzrLocation200ApplicationJSON
}
