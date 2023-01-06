package shared

type GetWorkflowSetupResponse struct {
	CalloutTrigger   *bool   `json:"callout_trigger,omitempty"`
	CreatedAt        *string `json:"createdAt,omitempty"`
	Description      *string `json:"description,omitempty"`
	ID               *int64  `json:"id,omitempty"`
	Interval         *string `json:"interval,omitempty"`
	Name             *string `json:"name,omitempty"`
	OndemandTrigger  *bool   `json:"ondemand_trigger,omitempty"`
	Priority         *string `json:"priority,omitempty"`
	ScheduledTrigger *bool   `json:"scheduled_trigger,omitempty"`
	Status           *string `json:"status,omitempty"`
	Timezone         *string `json:"timezone,omitempty"`
	UpdatedAt        *string `json:"updatedAt,omitempty"`
}
