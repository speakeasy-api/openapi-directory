package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePhoneSettingsApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byoc")
    public UpdatePhoneSettingsApplicationJsonByoc byoc;
    public UpdatePhoneSettingsApplicationJson withByoc(UpdatePhoneSettingsApplicationJsonByoc byoc) {
        this.byoc = byoc;
        return this;
    }
}