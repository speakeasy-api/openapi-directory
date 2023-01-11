package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutoRefresh {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalStatus")
    public AutoRefreshAdditionalStatusEnum additionalStatus;
    public AutoRefresh withAdditionalStatus(AutoRefreshAdditionalStatusEnum additionalStatus) {
        this.additionalStatus = additionalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asOfDate")
    public String asOfDate;
    public AutoRefresh withAsOfDate(String asOfDate) {
        this.asOfDate = asOfDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AutoRefreshStatusEnum status;
    public AutoRefresh withStatus(AutoRefreshStatusEnum status) {
        this.status = status;
        return this;
    }
}