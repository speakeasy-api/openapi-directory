package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedHoldingsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public DerivedHoldingsAccount[] account;
    public DerivedHoldingsSummary withAccount(DerivedHoldingsAccount[] account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationType")
    public String classificationType;
    public DerivedHoldingsSummary withClassificationType(String classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationValue")
    public String classificationValue;
    public DerivedHoldingsSummary withClassificationValue(String classificationValue) {
        this.classificationValue = classificationValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holding")
    public DerivedHolding[] holding;
    public DerivedHoldingsSummary withHolding(DerivedHolding[] holding) {
        this.holding = holding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Money value;
    public DerivedHoldingsSummary withValue(Money value) {
        this.value = value;
        return this;
    }
}