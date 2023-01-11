package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RampIntervalChargeDeltaMetricsDeltaMrr {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public Double discount;
    public RampIntervalChargeDeltaMetricsDeltaMrr withDiscount(Double discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public RampIntervalChargeDeltaMetricsDeltaMrr withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gross")
    public Double gross;
    public RampIntervalChargeDeltaMetricsDeltaMrr withGross(Double gross) {
        this.gross = gross;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net")
    public Double net;
    public RampIntervalChargeDeltaMetricsDeltaMrr withNet(Double net) {
        this.net = net;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public RampIntervalChargeDeltaMetricsDeltaMrr withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}