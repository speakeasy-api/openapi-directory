package shared

import (
	"time"
)

type CreateStoredCredentialProfileRequestActionEnum string

const (
	CreateStoredCredentialProfileRequestActionEnumActivate CreateStoredCredentialProfileRequestActionEnum = "Activate"
	CreateStoredCredentialProfileRequestActionEnumPersist  CreateStoredCredentialProfileRequestActionEnum = "Persist"
)

type CreateStoredCredentialProfileRequestConsentAgreementSrcEnum string

const (
	CreateStoredCredentialProfileRequestConsentAgreementSrcEnumExternal CreateStoredCredentialProfileRequestConsentAgreementSrcEnum = "External"
)

type CreateStoredCredentialProfileRequestStatusEnum string

const (
	CreateStoredCredentialProfileRequestStatusEnumAgreed CreateStoredCredentialProfileRequestStatusEnum = "Agreed"
	CreateStoredCredentialProfileRequestStatusEnumActive CreateStoredCredentialProfileRequestStatusEnum = "Active"
)

type CreateStoredCredentialProfileRequestTypeEnum string

const (
	CreateStoredCredentialProfileRequestTypeEnumRecurring   CreateStoredCredentialProfileRequestTypeEnum = "Recurring"
	CreateStoredCredentialProfileRequestTypeEnumUnscheduled CreateStoredCredentialProfileRequestTypeEnum = "Unscheduled"
)

type CreateStoredCredentialProfileRequest struct {
	Action               *CreateStoredCredentialProfileRequestActionEnum             `json:"action,omitempty"`
	AgreedOn             *time.Time                                                  `json:"agreedOn,omitempty"`
	AuthGateway          *string                                                     `json:"authGateway,omitempty"`
	CardSecurityCode     *string                                                     `json:"cardSecurityCode,omitempty"`
	ConsentAgreementRef  *string                                                     `json:"consentAgreementRef,omitempty"`
	ConsentAgreementSrc  CreateStoredCredentialProfileRequestConsentAgreementSrcEnum `json:"consentAgreementSrc"`
	NetworkTransactionID *string                                                     `json:"networkTransactionId,omitempty"`
	Status               CreateStoredCredentialProfileRequestStatusEnum              `json:"status"`
	Type                 CreateStoredCredentialProfileRequestTypeEnum                `json:"type"`
}
