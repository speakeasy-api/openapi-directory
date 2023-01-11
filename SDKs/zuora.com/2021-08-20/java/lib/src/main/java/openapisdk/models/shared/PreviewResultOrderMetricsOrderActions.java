package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewResultOrderMetricsOrderActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItems")
    public OrderItem[] orderItems;
    public PreviewResultOrderMetricsOrderActions withOrderItems(OrderItem[] orderItems) {
        this.orderItems = orderItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderMetrics")
    public OrderMetric[] orderMetrics;
    public PreviewResultOrderMetricsOrderActions withOrderMetrics(OrderMetric[] orderMetrics) {
        this.orderMetrics = orderMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public String sequence;
    public PreviewResultOrderMetricsOrderActions withSequence(String sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PreviewResultOrderMetricsOrderActions withType(String type) {
        this.type = type;
        return this;
    }
}