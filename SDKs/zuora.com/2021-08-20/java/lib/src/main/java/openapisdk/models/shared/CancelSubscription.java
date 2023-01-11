package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelSubscription
 * Information about an order action of type `CancelSubscription`.
 * 
**/
public class CancelSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationEffectiveDate")
    public LocalDate cancellationEffectiveDate;
    public CancelSubscription withCancellationEffectiveDate(LocalDate cancellationEffectiveDate) {
        this.cancellationEffectiveDate = cancellationEffectiveDate;
        return this;
    }
    @JsonProperty("cancellationPolicy")
    public CancelSubscriptionCancellationPolicyEnum cancellationPolicy;
    public CancelSubscription withCancellationPolicy(CancelSubscriptionCancellationPolicyEnum cancellationPolicy) {
        this.cancellationPolicy = cancellationPolicy;
        return this;
    }
}