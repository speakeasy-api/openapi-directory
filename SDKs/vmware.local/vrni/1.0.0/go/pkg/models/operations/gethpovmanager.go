// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetHpovManagerSecurity struct {
	APIKeyAuth string `security:"scheme,type=apiKey,subtype=header,name=Authorization"`
}

type GetHpovManagerRequest struct {
	// entity id
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetHpovManagerResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	SwitchDataSource *shared.SwitchDataSource
}
