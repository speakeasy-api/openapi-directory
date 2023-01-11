package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserRegistration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public UserAddress address;
    public UpdateUserRegistration withAddress(UserAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UpdateUserRegistration withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public UpdateUserRegistration withName(Name name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public UserRequestPreferences preferences;
    public UpdateUserRegistration withPreferences(UserRequestPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentName")
    public String segmentName;
    public UpdateUserRegistration withSegmentName(String segmentName) {
        this.segmentName = segmentName;
        return this;
    }
}