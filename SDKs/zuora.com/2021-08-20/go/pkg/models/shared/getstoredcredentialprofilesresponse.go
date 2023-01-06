package shared

import (
	"time"
)

type GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum string

const (
	GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnumExternal GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum = "External"
)

type GetStoredCredentialProfilesResponseProfilesStatusEnum string

const (
	GetStoredCredentialProfilesResponseProfilesStatusEnumAgreed    GetStoredCredentialProfilesResponseProfilesStatusEnum = "Agreed"
	GetStoredCredentialProfilesResponseProfilesStatusEnumActive    GetStoredCredentialProfilesResponseProfilesStatusEnum = "Active"
	GetStoredCredentialProfilesResponseProfilesStatusEnumCancelled GetStoredCredentialProfilesResponseProfilesStatusEnum = "Cancelled"
	GetStoredCredentialProfilesResponseProfilesStatusEnumExpired   GetStoredCredentialProfilesResponseProfilesStatusEnum = "Expired"
)

type GetStoredCredentialProfilesResponseProfilesTypeEnum string

const (
	GetStoredCredentialProfilesResponseProfilesTypeEnumRecurring   GetStoredCredentialProfilesResponseProfilesTypeEnum = "Recurring"
	GetStoredCredentialProfilesResponseProfilesTypeEnumUnscheduled GetStoredCredentialProfilesResponseProfilesTypeEnum = "Unscheduled"
)

// GetStoredCredentialProfilesResponseProfiles
// Container for stored credential profiles.
type GetStoredCredentialProfilesResponseProfiles struct {
	ActivatedOn         *time.Time                                                          `json:"activatedOn,omitempty"`
	AgreedOn            *time.Time                                                          `json:"agreedOn,omitempty"`
	Brand               *string                                                             `json:"brand,omitempty"`
	CancelledOn         *time.Time                                                          `json:"cancelledOn,omitempty"`
	ConsentAgreementRef *string                                                             `json:"consentAgreementRef,omitempty"`
	ConsentAgreementSrc *GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum `json:"consentAgreementSrc,omitempty"`
	ExpiredOn           *time.Time                                                          `json:"expiredOn,omitempty"`
	Number              *int64                                                              `json:"number,omitempty"`
	PaymentMethodID     *string                                                             `json:"paymentMethodId,omitempty"`
	Status              *GetStoredCredentialProfilesResponseProfilesStatusEnum              `json:"status,omitempty"`
	Type                *GetStoredCredentialProfilesResponseProfilesTypeEnum                `json:"type,omitempty"`
}

type GetStoredCredentialProfilesResponse struct {
	Profiles *GetStoredCredentialProfilesResponseProfiles `json:"profiles,omitempty"`
	Success  *bool                                        `json:"success,omitempty"`
}
