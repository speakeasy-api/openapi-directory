package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetHostedPagesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostedpages")
    public GetHostedPageType[] hostedpages;
    public GetHostedPagesType withHostedpages(GetHostedPageType[] hostedpages) {
        this.hostedpages = hostedpages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetHostedPagesType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}