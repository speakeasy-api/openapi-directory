package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayRuns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRuns")
    public PayRun[] payRuns;
    public PayRuns withPayRuns(PayRun[] payRuns) {
        this.payRuns = payRuns;
        return this;
    }
}