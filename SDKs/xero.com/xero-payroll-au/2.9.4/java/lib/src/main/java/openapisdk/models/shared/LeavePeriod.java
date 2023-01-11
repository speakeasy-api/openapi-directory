package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeavePeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeavePeriodStatus")
    public LeavePeriodStatusEnum leavePeriodStatus;
    public LeavePeriod withLeavePeriodStatus(LeavePeriodStatusEnum leavePeriodStatus) {
        this.leavePeriodStatus = leavePeriodStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double numberOfUnits;
    public LeavePeriod withNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayPeriodEndDate")
    public String payPeriodEndDate;
    public LeavePeriod withPayPeriodEndDate(String payPeriodEndDate) {
        this.payPeriodEndDate = payPeriodEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayPeriodStartDate")
    public String payPeriodStartDate;
    public LeavePeriod withPayPeriodStartDate(String payPeriodStartDate) {
        this.payPeriodStartDate = payPeriodStartDate;
        return this;
    }
}