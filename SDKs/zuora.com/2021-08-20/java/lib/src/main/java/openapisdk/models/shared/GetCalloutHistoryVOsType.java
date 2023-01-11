package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCalloutHistoryVOsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutHistories")
    public GetCalloutHistoryVoType[] calloutHistories;
    public GetCalloutHistoryVOsType withCalloutHistories(GetCalloutHistoryVoType[] calloutHistories) {
        this.calloutHistories = calloutHistories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetCalloutHistoryVOsType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetCalloutHistoryVOsType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}