package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CallTransfer {
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public CallTransfer withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}