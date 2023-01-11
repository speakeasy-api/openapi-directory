package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDebitMemoEmailType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddresses")
    public String emailAddresses;
    public PostDebitMemoEmailType withEmailAddresses(String emailAddresses) {
        this.emailAddresses = emailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAdditionalEmailAddresses")
    public Boolean includeAdditionalEmailAddresses;
    public PostDebitMemoEmailType withIncludeAdditionalEmailAddresses(Boolean includeAdditionalEmailAddresses) {
        this.includeAdditionalEmailAddresses = includeAdditionalEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useEmailTemplateSetting")
    public Boolean useEmailTemplateSetting;
    public PostDebitMemoEmailType withUseEmailTemplateSetting(Boolean useEmailTemplateSetting) {
        this.useEmailTemplateSetting = useEmailTemplateSetting;
        return this;
    }
}