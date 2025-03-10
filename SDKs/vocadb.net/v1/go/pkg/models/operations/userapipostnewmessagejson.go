// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UserAPIPostNewMessageJSONPathParams struct {
	// User ID. Must be logged in user.
	ID int `pathParam:"style=simple,explode=false,name=id"`
}

type UserAPIPostNewMessageJSONRequest struct {
	PathParams UserAPIPostNewMessageJSONPathParams
	// Message data.
	Request shared.UserMessageContract `request:"mediaType=application/json"`
}

type UserAPIPostNewMessageJSONResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	UserMessageContract *shared.UserMessageContract
}
