package shared

import (
	"time"
)

type GetPublicNotificationDefinitionResponseCalloutHTTPMethodEnum string

const (
	GETPublicNotificationDefinitionResponseCalloutHTTPMethodEnumGet    GetPublicNotificationDefinitionResponseCalloutHTTPMethodEnum = "GET"
	GETPublicNotificationDefinitionResponseCalloutHTTPMethodEnumPut    GetPublicNotificationDefinitionResponseCalloutHTTPMethodEnum = "PUT"
	GETPublicNotificationDefinitionResponseCalloutHTTPMethodEnumPost   GetPublicNotificationDefinitionResponseCalloutHTTPMethodEnum = "POST"
	GETPublicNotificationDefinitionResponseCalloutHTTPMethodEnumDelete GetPublicNotificationDefinitionResponseCalloutHTTPMethodEnum = "DELETE"
)

type GetPublicNotificationDefinitionResponseCallout struct {
	Active         *bool                                                         `json:"active,omitempty"`
	CalloutAuth    *CalloutAuth                                                  `json:"calloutAuth,omitempty"`
	CalloutBaseurl *string                                                       `json:"calloutBaseurl,omitempty"`
	CalloutParams  map[string]string                                             `json:"calloutParams,omitempty"`
	CalloutRetry   *bool                                                         `json:"calloutRetry,omitempty"`
	Description    *string                                                       `json:"description,omitempty"`
	EventTypeName  *string                                                       `json:"eventTypeName,omitempty"`
	HTTPMethod     *GetPublicNotificationDefinitionResponseCalloutHTTPMethodEnum `json:"httpMethod,omitempty"`
	ID             *string                                                       `json:"id,omitempty"`
	Name           *string                                                       `json:"name,omitempty"`
	RequiredAuth   *bool                                                         `json:"requiredAuth,omitempty"`
}

type GetPublicNotificationDefinitionResponseFilterRule struct {
	Condition     *string                                  `json:"condition,omitempty"`
	Description   *string                                  `json:"description,omitempty"`
	EventTypeName *string                                  `json:"eventTypeName,omitempty"`
	ID            *string                                  `json:"id,omitempty"`
	Parameters    map[string]FilterRuleParameterDefinition `json:"parameters,omitempty"`
}

type GetPublicNotificationDefinitionResponse struct {
	Active                 *bool                                              `json:"active,omitempty"`
	Callout                *GetPublicNotificationDefinitionResponseCallout    `json:"callout,omitempty"`
	CalloutActive          *bool                                              `json:"calloutActive,omitempty"`
	CommunicationProfileID *string                                            `json:"communicationProfileId,omitempty"`
	CreatedBy              *string                                            `json:"createdBy,omitempty"`
	CreatedOn              *time.Time                                         `json:"createdOn,omitempty"`
	Description            *string                                            `json:"description,omitempty"`
	EmailActive            *bool                                              `json:"emailActive,omitempty"`
	EmailTemplateID        *string                                            `json:"emailTemplateId,omitempty"`
	EventTypeName          *string                                            `json:"eventTypeName,omitempty"`
	EventTypeNamespace     *string                                            `json:"eventTypeNamespace,omitempty"`
	FilterRule             *GetPublicNotificationDefinitionResponseFilterRule `json:"filterRule,omitempty"`
	FilterRuleParams       map[string]string                                  `json:"filterRuleParams,omitempty"`
	ID                     *string                                            `json:"id,omitempty"`
	Name                   *string                                            `json:"name,omitempty"`
	UpdatedBy              *string                                            `json:"updatedBy,omitempty"`
	UpdatedOn              *time.Time                                         `json:"updatedOn,omitempty"`
}
