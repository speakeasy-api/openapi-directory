// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type RetrieveSellerLeadRequest struct {
	// HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
	Accept string `header:"style=simple,explode=false,name=Accept"`
	// Type of the content being sent.
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
	// Name of the VTEX account that belongs to the marketplace.
	AccountName string `queryParam:"style=form,explode=true,name=accountName"`
	// Environment to use. Used as part of the URL.
	Environment string `queryParam:"style=form,explode=true,name=environment"`
	// ID of the Seller Lead invited to the marketplace.
	SellerLeadID string `pathParam:"style=simple,explode=false,name=sellerLeadId"`
}

type RetrieveSellerLeadResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
