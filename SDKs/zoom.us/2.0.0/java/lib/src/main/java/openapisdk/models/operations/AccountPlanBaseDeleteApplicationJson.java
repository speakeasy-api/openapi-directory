package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountPlanBaseDeleteApplicationJson {
    @JsonProperty("action")
    public String action;
    public AccountPlanBaseDeleteApplicationJson withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public AccountPlanBaseDeleteApplicationJson withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public Long reason;
    public AccountPlanBaseDeleteApplicationJson withReason(Long reason) {
        this.reason = reason;
        return this;
    }
}