package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountPlanBaseDeleteMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public String action;
    public AccountPlanBaseDeleteMultipartFormData withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=comment")
    public String comment;
    public AccountPlanBaseDeleteMultipartFormData withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=reason")
    public Long reason;
    public AccountPlanBaseDeleteMultipartFormData withReason(Long reason) {
        this.reason = reason;
        return this;
    }
}