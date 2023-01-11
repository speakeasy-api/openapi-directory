package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RampMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RampMetrics withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcb")
    public Double discountTcb;
    public RampMetrics withDiscountTcb(Double discountTcb) {
        this.discountTcb = discountTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcv")
    public Double discountTcv;
    public RampMetrics withDiscountTcv(Double discountTcv) {
        this.discountTcv = discountTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcb")
    public Double grossTcb;
    public RampMetrics withGrossTcb(Double grossTcb) {
        this.grossTcb = grossTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcv")
    public Double grossTcv;
    public RampMetrics withGrossTcv(Double grossTcv) {
        this.grossTcv = grossTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervals")
    public RampIntervalMetrics[] intervals;
    public RampMetrics withIntervals(RampIntervalMetrics[] intervals) {
        this.intervals = intervals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RampMetrics withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcb")
    public Double netTcb;
    public RampMetrics withNetTcb(Double netTcb) {
        this.netTcb = netTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcv")
    public Double netTcv;
    public RampMetrics withNetTcv(Double netTcv) {
        this.netTcv = netTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public RampMetrics withNumber(String number) {
        this.number = number;
        return this;
    }
}