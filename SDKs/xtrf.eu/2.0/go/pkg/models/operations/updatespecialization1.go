// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateSpecialization1Request struct {
	// Updated specialization for a quote.
	SpecializationDTO shared.SpecializationDTO `request:"mediaType=application/json"`
	// quote's internal identifier
	QuoteID string `pathParam:"style=simple,explode=false,name=quoteId"`
}

type UpdateSpecialization1Response struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
