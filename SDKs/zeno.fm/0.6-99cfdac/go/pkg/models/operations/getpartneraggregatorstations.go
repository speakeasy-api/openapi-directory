// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetPartnerAggregatorStationsRequest struct {
	HitsPerPage *string `queryParam:"style=form,explode=true,name=hitsPerPage"`
	Page        *string `queryParam:"style=form,explode=true,name=page"`
}

type GetPartnerAggregatorStationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
