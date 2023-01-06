package shared

// ServicePrincipalCreateParameters
// Active Directory service principal common properties shared among GET, POST and PATCH
type ServicePrincipalCreateParameters struct {
	AccountEnabled            *bool                               `json:"accountEnabled,omitempty"`
	AppRoleAssignmentRequired *bool                               `json:"appRoleAssignmentRequired,omitempty"`
	KeyCredentials            []map[string]map[string]interface{} `json:"keyCredentials,omitempty"`
	PasswordCredentials       []map[string]map[string]interface{} `json:"passwordCredentials,omitempty"`
	ServicePrincipalType      *string                             `json:"servicePrincipalType,omitempty"`
	Tags                      []string                            `json:"tags,omitempty"`
}
