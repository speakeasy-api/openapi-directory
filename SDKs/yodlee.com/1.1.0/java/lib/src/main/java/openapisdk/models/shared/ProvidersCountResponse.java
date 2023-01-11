package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvidersCountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public ProvidersCount provider;
    public ProvidersCountResponse withProvider(ProvidersCount provider) {
        this.provider = provider;
        return this;
    }
}