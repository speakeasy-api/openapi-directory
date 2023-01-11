package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsEventResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public DataExtractsEvent event;
    public DataExtractsEventResponse withEvent(DataExtractsEvent event) {
        this.event = event;
        return this;
    }
}