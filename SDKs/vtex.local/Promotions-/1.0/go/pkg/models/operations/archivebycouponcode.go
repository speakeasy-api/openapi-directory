// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ArchivebycouponcodeRequest struct {
	// HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
	Accept string `header:"style=simple,explode=false,name=Accept"`
	// Describes the type of the content being sent.
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
	// Coupon Code
	CouponCode string `pathParam:"style=simple,explode=false,name=couponCode"`
}

type ArchivebycouponcodeResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	CouponCode *string
}
