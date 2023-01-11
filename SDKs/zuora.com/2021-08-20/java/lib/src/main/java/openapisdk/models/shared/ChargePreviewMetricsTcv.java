package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChargePreviewMetricsTcv {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public Double discount;
    public ChargePreviewMetricsTcv withDiscount(Double discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountDelta")
    public Double discountDelta;
    public ChargePreviewMetricsTcv withDiscountDelta(Double discountDelta) {
        this.discountDelta = discountDelta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regular")
    public Double regular;
    public ChargePreviewMetricsTcv withRegular(Double regular) {
        this.regular = regular;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularDelta")
    public Double regularDelta;
    public ChargePreviewMetricsTcv withRegularDelta(Double regularDelta) {
        this.regularDelta = regularDelta;
        return this;
    }
}