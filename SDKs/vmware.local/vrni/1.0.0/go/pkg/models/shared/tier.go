package shared

type Tier struct {
	Application             *Reference                `json:"application,omitempty"`
	GroupMembershipCriteria []GroupMembershipCriteria `json:"group_membership_criteria,omitempty"`
}
