// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetVCustomPricesSessionSchemaRequest struct {
	// HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
	Accept string `header:"style=simple,explode=false,name=Accept"`
	// Describes the type of the content being sent
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
}

type GetVCustomPricesSessionSchemaRequestBodyFields struct {
	// Criteria name
	Name string `json:"name"`
	// Criteria type
	Type string `json:"type"`
}

// GetVCustomPricesSessionSchemaRequestBody - OK
type GetVCustomPricesSessionSchemaRequestBody struct {
	// Order Configuration criteria
	Fields []GetVCustomPricesSessionSchemaRequestBodyFields `json:"fields"`
	// If the custom price should use the user's e-mail to validate it
	UseEmail *bool `json:"useEmail,omitempty"`
}

type GetVCustomPricesSessionSchemaResponse struct {
	ContentType string
	// OK
	RequestBody *GetVCustomPricesSessionSchemaRequestBody
	StatusCode  int
	RawResponse *http.Response
}
