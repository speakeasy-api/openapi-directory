// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ErrorTypeEnum - Identifies the type of error.
type ErrorTypeEnum string

const (
	ErrorTypeEnumInvalidRequest                              ErrorTypeEnum = "invalid-request"
	ErrorTypeEnumInvalidApplication                          ErrorTypeEnum = "invalid-application"
	ErrorTypeEnumInvalidFeedConnection                       ErrorTypeEnum = "invalid-feed-connection"
	ErrorTypeEnumDuplicateStatement                          ErrorTypeEnum = "duplicate-statement"
	ErrorTypeEnumInvalidEndBalance                           ErrorTypeEnum = "invalid-end-balance"
	ErrorTypeEnumInvalidStartAndEndDate                      ErrorTypeEnum = "invalid-start-and-end-date"
	ErrorTypeEnumInvalidStartDate                            ErrorTypeEnum = "invalid-start-date"
	ErrorTypeEnumInternalError                               ErrorTypeEnum = "internal-error"
	ErrorTypeEnumFeedAlreadyConnectedInCurrentOrganisation   ErrorTypeEnum = "feed-already-connected-in-current-organisation"
	ErrorTypeEnumInvalidEndDate                              ErrorTypeEnum = "invalid-end-date"
	ErrorTypeEnumStatementNotFound                           ErrorTypeEnum = "statement-not-found"
	ErrorTypeEnumFeedConnectedInDifferentOrganisation        ErrorTypeEnum = "feed-connected-in-different-organisation"
	ErrorTypeEnumFeedAlreadyConnectedInDifferentOrganisation ErrorTypeEnum = "feed-already-connected-in-different-organisation"
	ErrorTypeEnumBankFeedNotFound                            ErrorTypeEnum = "bank-feed-not-found"
	ErrorTypeEnumInvalidCountrySpecified                     ErrorTypeEnum = "invalid-country-specified"
	ErrorTypeEnumInvalidOrganisationBankFeeds                ErrorTypeEnum = "invalid-organisation-bank-feeds"
	ErrorTypeEnumInvalidOrganisationMultiCurrency            ErrorTypeEnum = "invalid-organisation-multi-currency"
	ErrorTypeEnumInvalidFeedConnectionForOrganisation        ErrorTypeEnum = "invalid-feed-connection-for-organisation"
	ErrorTypeEnumInvalidUserRole                             ErrorTypeEnum = "invalid-user-role"
	ErrorTypeEnumAccountNotValid                             ErrorTypeEnum = "account-not-valid"
)

func (e ErrorTypeEnum) ToPointer() *ErrorTypeEnum {
	return &e
}

func (e *ErrorTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "invalid-request":
		fallthrough
	case "invalid-application":
		fallthrough
	case "invalid-feed-connection":
		fallthrough
	case "duplicate-statement":
		fallthrough
	case "invalid-end-balance":
		fallthrough
	case "invalid-start-and-end-date":
		fallthrough
	case "invalid-start-date":
		fallthrough
	case "internal-error":
		fallthrough
	case "feed-already-connected-in-current-organisation":
		fallthrough
	case "invalid-end-date":
		fallthrough
	case "statement-not-found":
		fallthrough
	case "feed-connected-in-different-organisation":
		fallthrough
	case "feed-already-connected-in-different-organisation":
		fallthrough
	case "bank-feed-not-found":
		fallthrough
	case "invalid-country-specified":
		fallthrough
	case "invalid-organisation-bank-feeds":
		fallthrough
	case "invalid-organisation-multi-currency":
		fallthrough
	case "invalid-feed-connection-for-organisation":
		fallthrough
	case "invalid-user-role":
		fallthrough
	case "account-not-valid":
		*e = ErrorTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ErrorTypeEnum: %v", v)
	}
}

// Error - On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
type Error struct {
	// Human readable detailed error description.
	Detail *string `json:"detail,omitempty"`
	// The numeric HTTP Status Code, e.g. 404
	Status *int64 `json:"status,omitempty"`
	// Human readable high level error description.
	Title *string `json:"title,omitempty"`
	// Identifies the type of error.
	Type *ErrorTypeEnum `json:"type,omitempty"`
}
