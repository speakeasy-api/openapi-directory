package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserRegistration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public UserAddress address;
    public UserRegistration withAddress(UserAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserRegistration withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("loginName")
    public String loginName;
    public UserRegistration withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public UserRegistration withName(Name name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public UserRequestPreferences preferences;
    public UserRegistration withPreferences(UserRequestPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentName")
    public String segmentName;
    public UserRegistration withSegmentName(String segmentName) {
        this.segmentName = segmentName;
        return this;
    }
}