package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyCreateUnitOfMeasure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public ProxyCreateUnitOfMeasure withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("DecimalPlaces")
    public Long decimalPlaces;
    public ProxyCreateUnitOfMeasure withDecimalPlaces(Long decimalPlaces) {
        this.decimalPlaces = decimalPlaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayedAs")
    public String displayedAs;
    public ProxyCreateUnitOfMeasure withDisplayedAs(String displayedAs) {
        this.displayedAs = displayedAs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoundingMode")
    public String roundingMode;
    public ProxyCreateUnitOfMeasure withRoundingMode(String roundingMode) {
        this.roundingMode = roundingMode;
        return this;
    }
    @JsonProperty("UomName")
    public String uomName;
    public ProxyCreateUnitOfMeasure withUomName(String uomName) {
        this.uomName = uomName;
        return this;
    }
}