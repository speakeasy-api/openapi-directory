package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutScheduleRiDetailType {
    @JsonProperty("revenueItems")
    public java.util.Map<String, Object>[] revenueItems;
    public PutScheduleRiDetailType withRevenueItems(java.util.Map<String, Object>[] revenueItems) {
        this.revenueItems = revenueItems;
        return this;
    }
}