package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Users200ApplicationJsonUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Users200ApplicationJsonUsers withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_attributes")
    public Users200ApplicationJsonUsersCustomAttributes[] customAttributes;
    public Users200ApplicationJsonUsers withCustomAttributes(Users200ApplicationJsonUsersCustomAttributes[] customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public Users200ApplicationJsonUsers withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public Users200ApplicationJsonUsers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public Users200ApplicationJsonUsers withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_ids")
    public String[] groupIds;
    public Users200ApplicationJsonUsers withGroupIds(String[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_key")
    public String hostKey;
    public Users200ApplicationJsonUsers withHostKey(String hostKey) {
        this.hostKey = hostKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Users200ApplicationJsonUsers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("im_group_ids")
    public String[] imGroupIds;
    public Users200ApplicationJsonUsers withImGroupIds(String[] imGroupIds) {
        this.imGroupIds = imGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_client_version")
    public String lastClientVersion;
    public Users200ApplicationJsonUsers withLastClientVersion(String lastClientVersion) {
        this.lastClientVersion = lastClientVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_login_time")
    public OffsetDateTime lastLoginTime;
    public Users200ApplicationJsonUsers withLastLoginTime(OffsetDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public Users200ApplicationJsonUsers withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_united_type")
    public String planUnitedType;
    public Users200ApplicationJsonUsers withPlanUnitedType(String planUnitedType) {
        this.planUnitedType = planUnitedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi")
    public Long pmi;
    public Users200ApplicationJsonUsers withPmi(Long pmi) {
        this.pmi = pmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_id")
    public String roleId;
    public Users200ApplicationJsonUsers withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Users200ApplicationJsonUsers withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Users200ApplicationJsonUsers withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public Users200ApplicationJsonUsers withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Long verified;
    public Users200ApplicationJsonUsers withVerified(Long verified) {
        this.verified = verified;
        return this;
    }
}