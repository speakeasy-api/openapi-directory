package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_membership_criteria")
    public GroupMembershipCriteria[] groupMembershipCriteria;
    public TierRequest withGroupMembershipCriteria(GroupMembershipCriteria[] groupMembershipCriteria) {
        this.groupMembershipCriteria = groupMembershipCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TierRequest withName(String name) {
        this.name = name;
        return this;
    }
}