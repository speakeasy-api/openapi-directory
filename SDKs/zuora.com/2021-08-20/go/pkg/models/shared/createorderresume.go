package shared

import (
	"time"
)

type CreateOrderResumeResumePeriodsTypeEnum string

const (
	CreateOrderResumeResumePeriodsTypeEnumDay   CreateOrderResumeResumePeriodsTypeEnum = "Day"
	CreateOrderResumeResumePeriodsTypeEnumWeek  CreateOrderResumeResumePeriodsTypeEnum = "Week"
	CreateOrderResumeResumePeriodsTypeEnumMonth CreateOrderResumeResumePeriodsTypeEnum = "Month"
	CreateOrderResumeResumePeriodsTypeEnumYear  CreateOrderResumeResumePeriodsTypeEnum = "Year"
)

type CreateOrderResumeResumePolicyEnum string

const (
	CreateOrderResumeResumePolicyEnumToday                       CreateOrderResumeResumePolicyEnum = "Today"
	CreateOrderResumeResumePolicyEnumFixedPeriodsFromSuspendDate CreateOrderResumeResumePolicyEnum = "FixedPeriodsFromSuspendDate"
	CreateOrderResumeResumePolicyEnumFixedPeriodsFromToday       CreateOrderResumeResumePolicyEnum = "FixedPeriodsFromToday"
	CreateOrderResumeResumePolicyEnumSpecificDate                CreateOrderResumeResumePolicyEnum = "SpecificDate"
	CreateOrderResumeResumePolicyEnumSuspendDate                 CreateOrderResumeResumePolicyEnum = "SuspendDate"
)

// CreateOrderResume
// Information about an order action of type `Resume`.
type CreateOrderResume struct {
	ExtendsTerm        *bool                                   `json:"extendsTerm,omitempty"`
	ResumePeriods      *int64                                  `json:"resumePeriods,omitempty"`
	ResumePeriodsType  *CreateOrderResumeResumePeriodsTypeEnum `json:"resumePeriodsType,omitempty"`
	ResumePolicy       CreateOrderResumeResumePolicyEnum       `json:"resumePolicy"`
	ResumeSpecificDate *time.Time                              `json:"resumeSpecificDate,omitempty"`
}
