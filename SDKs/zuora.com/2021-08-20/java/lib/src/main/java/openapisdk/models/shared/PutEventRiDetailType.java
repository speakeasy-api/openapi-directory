package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutEventRiDetailType {
    @JsonProperty("revenueItems")
    public java.util.Map<String, Object>[] revenueItems;
    public PutEventRiDetailType withRevenueItems(java.util.Map<String, Object>[] revenueItems) {
        this.revenueItems = revenueItems;
        return this;
    }
}