package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderSuspend
 * Information about an order action of type `Suspend`.
 * 
**/
public class CreateOrderSuspend {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPeriods")
    public Long suspendPeriods;
    public CreateOrderSuspend withSuspendPeriods(Long suspendPeriods) {
        this.suspendPeriods = suspendPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPeriodsType")
    public CreateOrderSuspendSuspendPeriodsTypeEnum suspendPeriodsType;
    public CreateOrderSuspend withSuspendPeriodsType(CreateOrderSuspendSuspendPeriodsTypeEnum suspendPeriodsType) {
        this.suspendPeriodsType = suspendPeriodsType;
        return this;
    }
    @JsonProperty("suspendPolicy")
    public CreateOrderSuspendSuspendPolicyEnum suspendPolicy;
    public CreateOrderSuspend withSuspendPolicy(CreateOrderSuspendSuspendPolicyEnum suspendPolicy) {
        this.suspendPolicy = suspendPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendSpecificDate")
    public LocalDate suspendSpecificDate;
    public CreateOrderSuspend withSuspendSpecificDate(LocalDate suspendSpecificDate) {
        this.suspendSpecificDate = suspendSpecificDate;
        return this;
    }
}