package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PriceFormatted {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("american")
    public String american;
    public PriceFormatted withAmerican(String american) {
        this.american = american;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decimal")
    public Double decimal;
    public PriceFormatted withDecimal(Double decimal) {
        this.decimal = decimal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fractional")
    public String fractional;
    public PriceFormatted withFractional(String fractional) {
        this.fractional = fractional;
        return this;
    }
}