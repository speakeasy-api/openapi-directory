package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public UserAddress address;
    public UserDetail withAddress(UserAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserDetail withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UserDetail withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginName")
    public String loginName;
    public UserDetail withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public UserDetail withName(Name name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public UserResponsePreferences preferences;
    public UserDetail withPreferences(UserResponsePreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleType")
    public UserDetailRoleTypeEnum roleType;
    public UserDetail withRoleType(UserDetailRoleTypeEnum roleType) {
        this.roleType = roleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentName")
    public String segmentName;
    public UserDetail withSegmentName(String segmentName) {
        this.segmentName = segmentName;
        return this;
    }
}