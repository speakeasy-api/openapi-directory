package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChargePreviewMetricsTcb {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public Double discount;
    public ChargePreviewMetricsTcb withDiscount(Double discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountDelta")
    public Double discountDelta;
    public ChargePreviewMetricsTcb withDiscountDelta(Double discountDelta) {
        this.discountDelta = discountDelta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regular")
    public Double regular;
    public ChargePreviewMetricsTcb withRegular(Double regular) {
        this.regular = regular;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularDelta")
    public Double regularDelta;
    public ChargePreviewMetricsTcb withRegularDelta(Double regularDelta) {
        this.regularDelta = regularDelta;
        return this;
    }
}