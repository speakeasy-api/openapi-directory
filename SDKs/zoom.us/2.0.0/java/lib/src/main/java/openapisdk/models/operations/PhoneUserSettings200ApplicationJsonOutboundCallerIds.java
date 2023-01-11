package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUserSettings200ApplicationJsonOutboundCallerIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_default")
    public Boolean isDefault;
    public PhoneUserSettings200ApplicationJsonOutboundCallerIds withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PhoneUserSettings200ApplicationJsonOutboundCallerIds withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PhoneUserSettings200ApplicationJsonOutboundCallerIds withNumber(String number) {
        this.number = number;
        return this;
    }
}