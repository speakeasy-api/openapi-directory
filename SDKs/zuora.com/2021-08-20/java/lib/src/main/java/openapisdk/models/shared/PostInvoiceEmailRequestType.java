package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostInvoiceEmailRequestType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddresses")
    public String emailAddresses;
    public PostInvoiceEmailRequestType withEmailAddresses(String emailAddresses) {
        this.emailAddresses = emailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAdditionalEmailAddresses")
    public Boolean includeAdditionalEmailAddresses;
    public PostInvoiceEmailRequestType withIncludeAdditionalEmailAddresses(Boolean includeAdditionalEmailAddresses) {
        this.includeAdditionalEmailAddresses = includeAdditionalEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useEmailTemplateSetting")
    public Boolean useEmailTemplateSetting;
    public PostInvoiceEmailRequestType withUseEmailTemplateSetting(Boolean useEmailTemplateSetting) {
        this.useEmailTemplateSetting = useEmailTemplateSetting;
        return this;
    }
}