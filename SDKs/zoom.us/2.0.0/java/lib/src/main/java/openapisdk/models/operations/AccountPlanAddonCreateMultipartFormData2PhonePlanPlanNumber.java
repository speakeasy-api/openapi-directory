package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber withType(String type) {
        this.type = type;
        return this;
    }
}