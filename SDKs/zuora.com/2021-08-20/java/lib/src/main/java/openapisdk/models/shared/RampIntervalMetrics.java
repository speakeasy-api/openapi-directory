package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RampIntervalMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RampIntervalMetrics withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcb")
    public Double discountTcb;
    public RampIntervalMetrics withDiscountTcb(Double discountTcb) {
        this.discountTcb = discountTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcv")
    public Double discountTcv;
    public RampIntervalMetrics withDiscountTcv(Double discountTcv) {
        this.discountTcv = discountTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public RampIntervalMetrics withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcb")
    public Double grossTcb;
    public RampIntervalMetrics withGrossTcb(Double grossTcb) {
        this.grossTcb = grossTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcv")
    public Double grossTcv;
    public RampIntervalMetrics withGrossTcv(Double grossTcv) {
        this.grossTcv = grossTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervalMetrics")
    public RampIntervalChargeMetrics[] intervalMetrics;
    public RampIntervalMetrics withIntervalMetrics(RampIntervalChargeMetrics[] intervalMetrics) {
        this.intervalMetrics = intervalMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RampIntervalMetrics withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcb")
    public Double netTcb;
    public RampIntervalMetrics withNetTcb(Double netTcb) {
        this.netTcb = netTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcv")
    public Double netTcv;
    public RampIntervalMetrics withNetTcv(Double netTcv) {
        this.netTcv = netTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public RampIntervalMetrics withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}