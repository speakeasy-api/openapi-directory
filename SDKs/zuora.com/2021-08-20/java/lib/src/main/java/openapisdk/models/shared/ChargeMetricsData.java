package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChargeMetricsData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeMetrics")
    public NewChargeMetrics[] chargeMetrics;
    public ChargeMetricsData withChargeMetrics(NewChargeMetrics[] chargeMetrics) {
        this.chargeMetrics = chargeMetrics;
        return this;
    }
}