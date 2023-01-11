package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Coverage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public CoverageAmount[] amount;
    public Coverage withAmount(CoverageAmount[] amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public Coverage withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planType")
    public CoveragePlanTypeEnum planType;
    public Coverage withPlanType(CoveragePlanTypeEnum planType) {
        this.planType = planType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public Coverage withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CoverageTypeEnum type;
    public Coverage withType(CoverageTypeEnum type) {
        this.type = type;
        return this;
    }
}