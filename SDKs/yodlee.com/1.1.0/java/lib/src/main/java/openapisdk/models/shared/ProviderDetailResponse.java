package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public ProviderDetail[] provider;
    public ProviderDetailResponse withProvider(ProviderDetail[] provider) {
        this.provider = provider;
        return this;
    }
}