package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanAddonCancelApplicationJson
 * Account plan object
**/
public class AccountPlanAddonCancelApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public AccountPlanAddonCancelApplicationJsonActionEnum action;
    public AccountPlanAddonCancelApplicationJson withAction(AccountPlanAddonCancelApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public AccountPlanAddonCancelApplicationJson withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public Long reason;
    public AccountPlanAddonCancelApplicationJson withReason(Long reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanAddonCancelApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}