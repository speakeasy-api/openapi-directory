package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Betslippart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eachWayAvailable")
    public Boolean eachWayAvailable;
    public Betslippart withEachWayAvailable(Boolean eachWayAvailable) {
        this.eachWayAvailable = eachWayAvailable;
        return this;
    }
    @JsonProperty("includeInMultiple")
    public Boolean includeInMultiple;
    public Betslippart withIncludeInMultiple(Boolean includeInMultiple) {
        this.includeInMultiple = includeInMultiple;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legGroup")
    public Long legGroup;
    public Betslippart withLegGroup(Long legGroup) {
        this.legGroup = legGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChanged")
    public Boolean priceChanged;
    public Betslippart withPriceChanged(Boolean priceChanged) {
        this.priceChanged = priceChanged;
        return this;
    }
    @JsonProperty("priceDen")
    public Long priceDen;
    public Betslippart withPriceDen(Long priceDen) {
        this.priceDen = priceDen;
        return this;
    }
    @JsonProperty("priceNum")
    public Long priceNum;
    public Betslippart withPriceNum(Long priceNum) {
        this.priceNum = priceNum;
        return this;
    }
    @JsonProperty("priceType")
    public Long priceType;
    public Betslippart withPriceType(Long priceType) {
        this.priceType = priceType;
        return this;
    }
    @JsonProperty("selectionId")
    public Long selectionId;
    public Betslippart withSelectionId(Long selectionId) {
        this.selectionId = selectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleAvailable")
    public Boolean singleAvailable;
    public Betslippart withSingleAvailable(Boolean singleAvailable) {
        this.singleAvailable = singleAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startingPriceAvailable")
    public Boolean startingPriceAvailable;
    public Betslippart withStartingPriceAvailable(Boolean startingPriceAvailable) {
        this.startingPriceAvailable = startingPriceAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Betslippart withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusChanged")
    public Boolean statusChanged;
    public Betslippart withStatusChanged(Boolean statusChanged) {
        this.statusChanged = statusChanged;
        return this;
    }
}