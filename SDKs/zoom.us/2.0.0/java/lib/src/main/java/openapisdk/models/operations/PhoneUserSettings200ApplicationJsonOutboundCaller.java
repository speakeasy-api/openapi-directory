package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUserSettings200ApplicationJsonOutboundCaller
 * Outbound Caller Info
**/
public class PhoneUserSettings200ApplicationJsonOutboundCaller {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PhoneUserSettings200ApplicationJsonOutboundCaller withNumber(String number) {
        this.number = number;
        return this;
    }
}