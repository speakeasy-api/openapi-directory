package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public Providers[] provider;
    public ProviderResponse withProvider(Providers[] provider) {
        this.provider = provider;
        return this;
    }
}