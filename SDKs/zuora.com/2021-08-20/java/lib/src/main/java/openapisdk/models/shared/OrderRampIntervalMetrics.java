package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderRampIntervalMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderRampIntervalMetrics withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcb")
    public Double discountTcb;
    public OrderRampIntervalMetrics withDiscountTcb(Double discountTcb) {
        this.discountTcb = discountTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountTcv")
    public Double discountTcv;
    public OrderRampIntervalMetrics withDiscountTcv(Double discountTcv) {
        this.discountTcv = discountTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public OrderRampIntervalMetrics withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcb")
    public Double grossTcb;
    public OrderRampIntervalMetrics withGrossTcb(Double grossTcb) {
        this.grossTcb = grossTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossTcv")
    public Double grossTcv;
    public OrderRampIntervalMetrics withGrossTcv(Double grossTcv) {
        this.grossTcv = grossTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervalDeltaMetrics")
    public RampIntervalChargeDeltaMetrics[] intervalDeltaMetrics;
    public OrderRampIntervalMetrics withIntervalDeltaMetrics(RampIntervalChargeDeltaMetrics[] intervalDeltaMetrics) {
        this.intervalDeltaMetrics = intervalDeltaMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervalMetrics")
    public RampIntervalChargeMetrics[] intervalMetrics;
    public OrderRampIntervalMetrics withIntervalMetrics(RampIntervalChargeMetrics[] intervalMetrics) {
        this.intervalMetrics = intervalMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrderRampIntervalMetrics withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcb")
    public Double netTcb;
    public OrderRampIntervalMetrics withNetTcb(Double netTcb) {
        this.netTcb = netTcb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netTcv")
    public Double netTcv;
    public OrderRampIntervalMetrics withNetTcv(Double netTcv) {
        this.netTcv = netTcv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public OrderRampIntervalMetrics withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}