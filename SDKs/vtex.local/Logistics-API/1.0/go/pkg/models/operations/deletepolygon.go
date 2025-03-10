// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeletePolygonRequest struct {
	// HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
	Accept string `header:"style=simple,explode=false,name=Accept"`
	// Type of the content being sent
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
	PolygonName string `pathParam:"style=simple,explode=false,name=polygonName"`
}

type DeletePolygonResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
