package shared

import (
	"time"
)

type TriggerParamsTriggerEventEnum string

const (
	TriggerParamsTriggerEventEnumContractEffective  TriggerParamsTriggerEventEnum = "ContractEffective"
	TriggerParamsTriggerEventEnumServiceActivation  TriggerParamsTriggerEventEnum = "ServiceActivation"
	TriggerParamsTriggerEventEnumCustomerAcceptance TriggerParamsTriggerEventEnum = "CustomerAcceptance"
)

// TriggerParams
// Specifies when a charge becomes active.
type TriggerParams struct {
	SpecificTriggerDate *time.Time                     `json:"specificTriggerDate,omitempty"`
	TriggerEvent        *TriggerParamsTriggerEventEnum `json:"triggerEvent,omitempty"`
}
