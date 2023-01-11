package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderRampMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderRampMetrics withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcb")
    public Double discountTcb;
    public OrderRampMetrics withDiscountTcb(Double discountTcb) {
        this.discountTcb = discountTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcv")
    public Double discountTcv;
    public OrderRampMetrics withDiscountTcv(Double discountTcv) {
        this.discountTcv = discountTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcb")
    public Double grossTcb;
    public OrderRampMetrics withGrossTcb(Double grossTcb) {
        this.grossTcb = grossTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcv")
    public Double grossTcv;
    public OrderRampMetrics withGrossTcv(Double grossTcv) {
        this.grossTcv = grossTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervals")
    public OrderRampIntervalMetrics[] intervals;
    public OrderRampMetrics withIntervals(OrderRampIntervalMetrics[] intervals) {
        this.intervals = intervals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrderRampMetrics withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcb")
    public Double netTcb;
    public OrderRampMetrics withNetTcb(Double netTcb) {
        this.netTcb = netTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcv")
    public Double netTcv;
    public OrderRampMetrics withNetTcv(Double netTcv) {
        this.netTcv = netTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public OrderRampMetrics withNumber(String number) {
        this.number = number;
        return this;
    }
}