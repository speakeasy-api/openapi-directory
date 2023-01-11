package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedHoldingSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdingSummary")
    public DerivedHoldingsSummary[] holdingSummary;
    public DerivedHoldingSummaryResponse withHoldingSummary(DerivedHoldingsSummary[] holdingSummary) {
        this.holdingSummary = holdingSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public DerivedHoldingsLinks link;
    public DerivedHoldingSummaryResponse withLink(DerivedHoldingsLinks link) {
        this.link = link;
        return this;
    }
}