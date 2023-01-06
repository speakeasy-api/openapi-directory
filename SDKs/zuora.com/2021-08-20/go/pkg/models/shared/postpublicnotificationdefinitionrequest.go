package shared

type PostPublicNotificationDefinitionRequestCalloutHTTPMethodEnum string

const (
	POSTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumGet    PostPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "GET"
	POSTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumPut    PostPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "PUT"
	POSTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumPost   PostPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "POST"
	POSTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumDelete PostPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "DELETE"
)

type PostPublicNotificationDefinitionRequestCallout struct {
	Active         *bool                                                        `json:"active,omitempty"`
	CalloutAuth    *CalloutAuth                                                 `json:"calloutAuth,omitempty"`
	CalloutBaseurl string                                                       `json:"calloutBaseurl"`
	CalloutParams  map[string]string                                            `json:"calloutParams,omitempty"`
	CalloutRetry   *bool                                                        `json:"calloutRetry,omitempty"`
	Description    *string                                                      `json:"description,omitempty"`
	EventTypeName  string                                                       `json:"eventTypeName"`
	HTTPMethod     PostPublicNotificationDefinitionRequestCalloutHTTPMethodEnum `json:"httpMethod"`
	Name           string                                                       `json:"name"`
	RequiredAuth   bool                                                         `json:"requiredAuth"`
}

type PostPublicNotificationDefinitionRequestFilterRule struct {
	Condition   string                                   `json:"condition"`
	Description *string                                  `json:"description,omitempty"`
	Parameters  map[string]FilterRuleParameterDefinition `json:"parameters"`
}

type PostPublicNotificationDefinitionRequest struct {
	Active                 *bool                                              `json:"active,omitempty"`
	Callout                *PostPublicNotificationDefinitionRequestCallout    `json:"callout,omitempty"`
	CalloutActive          *bool                                              `json:"calloutActive,omitempty"`
	CommunicationProfileID *string                                            `json:"communicationProfileId,omitempty"`
	Description            *string                                            `json:"description,omitempty"`
	EmailActive            *bool                                              `json:"emailActive,omitempty"`
	EmailTemplateID        *string                                            `json:"emailTemplateId,omitempty"`
	EventTypeName          string                                             `json:"eventTypeName"`
	EventTypeNamespace     *string                                            `json:"eventTypeNamespace,omitempty"`
	FilterRule             *PostPublicNotificationDefinitionRequestFilterRule `json:"filterRule,omitempty"`
	FilterRuleParams       map[string]string                                  `json:"filterRuleParams,omitempty"`
	Name                   string                                             `json:"name"`
}
