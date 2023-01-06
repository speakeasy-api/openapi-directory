package shared

import (
	"time"
)

type GetOrderResumeResumePeriodsTypeEnum string

const (
	GetOrderResumeResumePeriodsTypeEnumDay   GetOrderResumeResumePeriodsTypeEnum = "Day"
	GetOrderResumeResumePeriodsTypeEnumWeek  GetOrderResumeResumePeriodsTypeEnum = "Week"
	GetOrderResumeResumePeriodsTypeEnumMonth GetOrderResumeResumePeriodsTypeEnum = "Month"
	GetOrderResumeResumePeriodsTypeEnumYear  GetOrderResumeResumePeriodsTypeEnum = "Year"
)

type GetOrderResumeResumePolicyEnum string

const (
	GetOrderResumeResumePolicyEnumToday                       GetOrderResumeResumePolicyEnum = "Today"
	GetOrderResumeResumePolicyEnumFixedPeriodsFromSuspendDate GetOrderResumeResumePolicyEnum = "FixedPeriodsFromSuspendDate"
	GetOrderResumeResumePolicyEnumFixedPeriodsFromToday       GetOrderResumeResumePolicyEnum = "FixedPeriodsFromToday"
	GetOrderResumeResumePolicyEnumSpecificDate                GetOrderResumeResumePolicyEnum = "SpecificDate"
	GetOrderResumeResumePolicyEnumSuspendDate                 GetOrderResumeResumePolicyEnum = "SuspendDate"
)

// GetOrderResume
// Information about an order action of type `Resume`.
type GetOrderResume struct {
	ExtendsTerm        *bool                                `json:"extendsTerm,omitempty"`
	ResumeDate         *time.Time                           `json:"resumeDate,omitempty"`
	ResumePeriods      *int64                               `json:"resumePeriods,omitempty"`
	ResumePeriodsType  *GetOrderResumeResumePeriodsTypeEnum `json:"resumePeriodsType,omitempty"`
	ResumePolicy       *GetOrderResumeResumePolicyEnum      `json:"resumePolicy,omitempty"`
	ResumeSpecificDate *time.Time                           `json:"resumeSpecificDate,omitempty"`
}
