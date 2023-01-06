package shared

import (
	"time"
)

type GetOrderSuspendSuspendPeriodsTypeEnum string

const (
	GetOrderSuspendSuspendPeriodsTypeEnumDay   GetOrderSuspendSuspendPeriodsTypeEnum = "Day"
	GetOrderSuspendSuspendPeriodsTypeEnumWeek  GetOrderSuspendSuspendPeriodsTypeEnum = "Week"
	GetOrderSuspendSuspendPeriodsTypeEnumMonth GetOrderSuspendSuspendPeriodsTypeEnum = "Month"
	GetOrderSuspendSuspendPeriodsTypeEnumYear  GetOrderSuspendSuspendPeriodsTypeEnum = "Year"
)

type GetOrderSuspendSuspendPolicyEnum string

const (
	GetOrderSuspendSuspendPolicyEnumToday                  GetOrderSuspendSuspendPolicyEnum = "Today"
	GetOrderSuspendSuspendPolicyEnumEndOfLastInvoicePeriod GetOrderSuspendSuspendPolicyEnum = "EndOfLastInvoicePeriod"
	GetOrderSuspendSuspendPolicyEnumFixedPeriodsFromToday  GetOrderSuspendSuspendPolicyEnum = "FixedPeriodsFromToday"
	GetOrderSuspendSuspendPolicyEnumSpecificDate           GetOrderSuspendSuspendPolicyEnum = "SpecificDate"
)

// GetOrderSuspend
// Information about an order action of type `Suspend`.
type GetOrderSuspend struct {
	SuspendDate         *time.Time                             `json:"suspendDate,omitempty"`
	SuspendPeriods      *int64                                 `json:"suspendPeriods,omitempty"`
	SuspendPeriodsType  *GetOrderSuspendSuspendPeriodsTypeEnum `json:"suspendPeriodsType,omitempty"`
	SuspendPolicy       *GetOrderSuspendSuspendPolicyEnum      `json:"suspendPolicy,omitempty"`
	SuspendSpecificDate *time.Time                             `json:"suspendSpecificDate,omitempty"`
}
