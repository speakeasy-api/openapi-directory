package shared

import (
	"time"
)

type PreviewOrderTriggerParamsTriggerEventEnum string

const (
	PreviewOrderTriggerParamsTriggerEventEnumContractEffective  PreviewOrderTriggerParamsTriggerEventEnum = "ContractEffective"
	PreviewOrderTriggerParamsTriggerEventEnumServiceActivation  PreviewOrderTriggerParamsTriggerEventEnum = "ServiceActivation"
	PreviewOrderTriggerParamsTriggerEventEnumCustomerAcceptance PreviewOrderTriggerParamsTriggerEventEnum = "CustomerAcceptance"
	PreviewOrderTriggerParamsTriggerEventEnumSpecificDate       PreviewOrderTriggerParamsTriggerEventEnum = "SpecificDate"
)

// PreviewOrderTriggerParams
// Specifies when a charge becomes active.
type PreviewOrderTriggerParams struct {
	SpecificTriggerDate *time.Time                                 `json:"specificTriggerDate,omitempty"`
	TriggerEvent        *PreviewOrderTriggerParamsTriggerEventEnum `json:"triggerEvent,omitempty"`
}
