package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePhoneSettingsMultipartFormDataByoc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdatePhoneSettingsMultipartFormDataByoc withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}