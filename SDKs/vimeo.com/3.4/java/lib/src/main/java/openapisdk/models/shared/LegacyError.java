package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LegacyError {
    @JsonProperty("error")
    public String error;
    public LegacyError withError(String error) {
        this.error = error;
        return this;
    }
}