package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePhoneNumberDetailsApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capability")
    public String[] capability;
    public UpdatePhoneNumberDetailsApplicationJson withCapability(String[] capability) {
        this.capability = capability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public UpdatePhoneNumberDetailsApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}