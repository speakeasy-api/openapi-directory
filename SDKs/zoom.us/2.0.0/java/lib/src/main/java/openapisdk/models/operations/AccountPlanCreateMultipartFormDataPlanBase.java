package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPlanCreateMultipartFormDataPlanBase
 * Account base plan object.
**/
public class AccountPlanCreateMultipartFormDataPlanBase {
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanCreateMultipartFormDataPlanBase withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountPlanCreateMultipartFormDataPlanBase withType(String type) {
        this.type = type;
        return this;
    }
}