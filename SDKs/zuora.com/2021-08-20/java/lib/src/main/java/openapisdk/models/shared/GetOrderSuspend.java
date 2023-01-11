package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOrderSuspend
 * Information about an order action of type `Suspend`.
 * 
**/
public class GetOrderSuspend {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendDate")
    public LocalDate suspendDate;
    public GetOrderSuspend withSuspendDate(LocalDate suspendDate) {
        this.suspendDate = suspendDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPeriods")
    public Long suspendPeriods;
    public GetOrderSuspend withSuspendPeriods(Long suspendPeriods) {
        this.suspendPeriods = suspendPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPeriodsType")
    public GetOrderSuspendSuspendPeriodsTypeEnum suspendPeriodsType;
    public GetOrderSuspend withSuspendPeriodsType(GetOrderSuspendSuspendPeriodsTypeEnum suspendPeriodsType) {
        this.suspendPeriodsType = suspendPeriodsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPolicy")
    public GetOrderSuspendSuspendPolicyEnum suspendPolicy;
    public GetOrderSuspend withSuspendPolicy(GetOrderSuspendSuspendPolicyEnum suspendPolicy) {
        this.suspendPolicy = suspendPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendSpecificDate")
    public LocalDate suspendSpecificDate;
    public GetOrderSuspend withSuspendSpecificDate(LocalDate suspendSpecificDate) {
        this.suspendSpecificDate = suspendSpecificDate;
        return this;
    }
}