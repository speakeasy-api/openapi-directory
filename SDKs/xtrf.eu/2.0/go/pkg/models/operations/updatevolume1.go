// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateVolume1Request struct {
	// Updated volume for a quote.
	BigDecimalDTO shared.BigDecimalDTO `request:"mediaType=application/json"`
	// quote's internal identifier
	QuoteID string `pathParam:"style=simple,explode=false,name=quoteId"`
}

type UpdateVolume1Response struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
