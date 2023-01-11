package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyModifyUnitOfMeasure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public ProxyModifyUnitOfMeasure withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DecimalPlaces")
    public Long decimalPlaces;
    public ProxyModifyUnitOfMeasure withDecimalPlaces(Long decimalPlaces) {
        this.decimalPlaces = decimalPlaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayedAs")
    public String displayedAs;
    public ProxyModifyUnitOfMeasure withDisplayedAs(String displayedAs) {
        this.displayedAs = displayedAs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoundingMode")
    public String roundingMode;
    public ProxyModifyUnitOfMeasure withRoundingMode(String roundingMode) {
        this.roundingMode = roundingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UomName")
    public String uomName;
    public ProxyModifyUnitOfMeasure withUomName(String uomName) {
        this.uomName = uomName;
        return this;
    }
}