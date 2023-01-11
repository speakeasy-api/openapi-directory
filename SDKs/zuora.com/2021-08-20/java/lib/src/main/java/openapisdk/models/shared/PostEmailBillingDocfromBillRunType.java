package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostEmailBillingDocfromBillRunType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resend")
    public Boolean resend;
    public PostEmailBillingDocfromBillRunType withResend(Boolean resend) {
        this.resend = resend;
        return this;
    }
}