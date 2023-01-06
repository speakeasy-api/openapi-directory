package shared

type PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum string

const (
	PUTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumGet    PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "GET"
	PUTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumPut    PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "PUT"
	PUTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumPost   PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "POST"
	PUTPublicNotificationDefinitionRequestCalloutHTTPMethodEnumDelete PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = "DELETE"
)

type PutPublicNotificationDefinitionRequestCallout struct {
	Active         *bool                                                       `json:"active,omitempty"`
	CalloutAuth    *CalloutAuth                                                `json:"calloutAuth,omitempty"`
	CalloutBaseurl string                                                      `json:"calloutBaseurl"`
	CalloutParams  map[string]string                                           `json:"calloutParams,omitempty"`
	CalloutRetry   *bool                                                       `json:"calloutRetry,omitempty"`
	Description    *string                                                     `json:"description,omitempty"`
	HTTPMethod     PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum `json:"httpMethod"`
	Name           string                                                      `json:"name"`
	RequiredAuth   bool                                                        `json:"requiredAuth"`
}

type PutPublicNotificationDefinitionRequestFilterRule struct {
	Condition   string                                   `json:"condition"`
	Description *string                                  `json:"description,omitempty"`
	Parameters  map[string]FilterRuleParameterDefinition `json:"parameters"`
}

type PutPublicNotificationDefinitionRequest struct {
	Active                 *bool                                             `json:"active,omitempty"`
	Callout                *PutPublicNotificationDefinitionRequestCallout    `json:"callout,omitempty"`
	CalloutActive          *bool                                             `json:"calloutActive,omitempty"`
	CommunicationProfileID *string                                           `json:"communicationProfileId,omitempty"`
	Description            *string                                           `json:"description,omitempty"`
	EmailActive            *bool                                             `json:"emailActive,omitempty"`
	EmailTemplateID        *string                                           `json:"emailTemplateId,omitempty"`
	FilterRule             *PutPublicNotificationDefinitionRequestFilterRule `json:"filterRule,omitempty"`
	FilterRuleParams       map[string]string                                 `json:"filterRuleParams,omitempty"`
	Name                   *string                                           `json:"name,omitempty"`
}
