package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CallCreate {
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public CallCreate withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}