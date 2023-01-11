package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayItems")
    public PayItem payItems;
    public PayItems withPayItems(PayItem payItems) {
        this.payItems = payItems;
        return this;
    }
}