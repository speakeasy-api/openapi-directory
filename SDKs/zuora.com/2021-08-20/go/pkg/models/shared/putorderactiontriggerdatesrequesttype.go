package shared

import (
	"time"
)

type PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges struct {
	ChargeNumber        *string    `json:"chargeNumber,omitempty"`
	SpecificTriggerDate *time.Time `json:"specificTriggerDate,omitempty"`
}

type PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum string

const (
	PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnumServiceActivation  PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum = "ServiceActivation"
	PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnumCustomerAcceptance PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum = "CustomerAcceptance"
)

type PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates struct {
	Name        *PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum `json:"name,omitempty"`
	TriggerDate *time.Time                                                                          `json:"triggerDate,omitempty"`
}

type PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions struct {
	Charges      []PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges      `json:"charges,omitempty"`
	Sequence     int64                                                                        `json:"sequence"`
	TriggerDates []PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates `json:"triggerDates,omitempty"`
}

type PutOrderActionTriggerDatesRequestTypeSubscriptions struct {
	OrderActions       []PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions `json:"orderActions,omitempty"`
	SubscriptionNumber string                                                           `json:"subscriptionNumber"`
}

type PutOrderActionTriggerDatesRequestType struct {
	Subscriptions []PutOrderActionTriggerDatesRequestTypeSubscriptions `json:"subscriptions,omitempty"`
}
