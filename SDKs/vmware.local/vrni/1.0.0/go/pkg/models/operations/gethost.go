// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetHostSecurity struct {
	APIKeyAuth string `security:"scheme,type=apiKey,subtype=header,name=Authorization"`
}

type GetHostRequest struct {
	// entity id
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// time in epoch seconds
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetHostResponse struct {
	// Bad Request
	APIError    *shared.APIError
	ContentType string
	// OK
	Host        *shared.Host
	StatusCode  int
	RawResponse *http.Response
}
