package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChargePreviewMetricsTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public Double discount;
    public ChargePreviewMetricsTax withDiscount(Double discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountDelta")
    public Double discountDelta;
    public ChargePreviewMetricsTax withDiscountDelta(Double discountDelta) {
        this.discountDelta = discountDelta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regular")
    public Double regular;
    public ChargePreviewMetricsTax withRegular(Double regular) {
        this.regular = regular;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularDelta")
    public Double regularDelta;
    public ChargePreviewMetricsTax withRegularDelta(Double regularDelta) {
        this.regularDelta = regularDelta;
        return this;
    }
}