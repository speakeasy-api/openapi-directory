package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedDelay")
    public Double fixedDelay;
    public PostAdminSettingsRequestBody withFixedDelay(Double fixedDelay) {
        this.fixedDelay = fixedDelay;
        return this;
    }
}