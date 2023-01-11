package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvidersCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TOTAL")
    public TotalCount total;
    public ProvidersCount withTotal(TotalCount total) {
        this.total = total;
        return this;
    }
}