package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CoverageAmount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover")
    public Money cover;
    public CoverageAmount withCover(Money cover) {
        this.cover = cover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitType")
    public CoverageAmountLimitTypeEnum limitType;
    public CoverageAmount withLimitType(CoverageAmountLimitTypeEnum limitType) {
        this.limitType = limitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("met")
    public Money met;
    public CoverageAmount withMet(Money met) {
        this.met = met;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CoverageAmountTypeEnum type;
    public CoverageAmount withType(CoverageAmountTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitType")
    public CoverageAmountUnitTypeEnum unitType;
    public CoverageAmount withUnitType(CoverageAmountUnitTypeEnum unitType) {
        this.unitType = unitType;
        return this;
    }
}