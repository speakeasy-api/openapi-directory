package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public Reference application;
    public Tier withApplication(Reference application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public Tier withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public Tier withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_membership_criteria")
    public GroupMembershipCriteria[] groupMembershipCriteria;
    public Tier withGroupMembershipCriteria(GroupMembershipCriteria[] groupMembershipCriteria) {
        this.groupMembershipCriteria = groupMembershipCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Tier withName(String name) {
        this.name = name;
        return this;
    }
}