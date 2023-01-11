package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public ApiKeyOutput[] apiKey;
    public ApiKeyResponse withApiKey(ApiKeyOutput[] apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}