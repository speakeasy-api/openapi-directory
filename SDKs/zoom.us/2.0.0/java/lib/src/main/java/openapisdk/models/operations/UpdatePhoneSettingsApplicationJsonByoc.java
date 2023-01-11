package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePhoneSettingsApplicationJsonByoc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdatePhoneSettingsApplicationJsonByoc withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}