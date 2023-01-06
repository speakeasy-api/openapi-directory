package shared

type GetCalloutHistoryVoType struct {
	AttemptedNum    *string `json:"attemptedNum,omitempty"`
	CreateTime      *string `json:"createTime,omitempty"`
	EventCategory   *string `json:"eventCategory,omitempty"`
	EventContext    *string `json:"eventContext,omitempty"`
	Notification    *string `json:"notification,omitempty"`
	RequestMethod   *string `json:"requestMethod,omitempty"`
	RequestURL      *string `json:"requestUrl,omitempty"`
	ResponseCode    *string `json:"responseCode,omitempty"`
	ResponseContent *string `json:"responseContent,omitempty"`
}
