package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewResultChargeMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charges")
    public ChargePreviewMetrics[] charges;
    public PreviewResultChargeMetrics withCharges(ChargePreviewMetrics[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PreviewResultChargeMetrics withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}