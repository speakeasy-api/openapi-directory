// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DeletedocumentRequest struct {
	// HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
	Accept string `header:"style=simple,explode=false,name=Accept"`
	// Type of the content being sent.
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
	// Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
	DataEntityName string `pathParam:"style=simple,explode=false,name=dataEntityName"`
	// ID of the Document.
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeletedocumentResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
