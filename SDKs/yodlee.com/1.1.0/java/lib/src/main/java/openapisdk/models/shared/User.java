package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public User withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginName")
    public String loginName;
    public User withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public User withName(Name name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public UserResponsePreferences preferences;
    public User withPreferences(UserResponsePreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleType")
    public UserRoleTypeEnum roleType;
    public User withRoleType(UserRoleTypeEnum roleType) {
        this.roleType = roleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public UserSession session;
    public User withSession(UserSession session) {
        this.session = session;
        return this;
    }
}