package operations

import (
	"openapi/pkg/models/shared"
)

type ListZrLocationsQueryParams struct {
	NextPageToken    *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize         *int64  `queryParam:"style=form,explode=true,name=page_size"`
	ParentLocationID *string `queryParam:"style=form,explode=true,name=parent_location_id"`
	Type             *string `queryParam:"style=form,explode=true,name=type"`
}

type ListZrLocationsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListZrLocations200ApplicationJSONLocationsTypeEnum string

const (
	ListZRLocations200ApplicationJSONLocationsTypeEnumCountry  ListZrLocations200ApplicationJSONLocationsTypeEnum = "country"
	ListZRLocations200ApplicationJSONLocationsTypeEnumStates   ListZrLocations200ApplicationJSONLocationsTypeEnum = "states"
	ListZRLocations200ApplicationJSONLocationsTypeEnumCity     ListZrLocations200ApplicationJSONLocationsTypeEnum = "city"
	ListZRLocations200ApplicationJSONLocationsTypeEnumCampus   ListZrLocations200ApplicationJSONLocationsTypeEnum = "campus"
	ListZRLocations200ApplicationJSONLocationsTypeEnumBuilding ListZrLocations200ApplicationJSONLocationsTypeEnum = "building"
	ListZRLocations200ApplicationJSONLocationsTypeEnumFloor    ListZrLocations200ApplicationJSONLocationsTypeEnum = "floor"
)

type ListZrLocations200ApplicationJSONLocations struct {
	ID               *string                                             `json:"id,omitempty"`
	Name             *string                                             `json:"name,omitempty"`
	ParentLocationID *string                                             `json:"parent_location_id,omitempty"`
	Type             *ListZrLocations200ApplicationJSONLocationsTypeEnum `json:"type,omitempty"`
}

type ListZrLocations200ApplicationJSON struct {
	Locations     []ListZrLocations200ApplicationJSONLocations `json:"locations,omitempty"`
	NextPageToken *string                                      `json:"next_page_token,omitempty"`
	PageSize      *int64                                       `json:"page_size,omitempty"`
}

type ListZrLocationsRequest struct {
	QueryParams ListZrLocationsQueryParams
	Security    ListZrLocationsSecurity
}

type ListZrLocationsResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	ListZRLocations200ApplicationJSONObject *ListZrLocations200ApplicationJSON
}
