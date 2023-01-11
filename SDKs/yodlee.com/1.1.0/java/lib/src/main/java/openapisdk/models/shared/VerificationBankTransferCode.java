package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerificationBankTransferCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public VerificationBankTransferCode withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public VerificationBankTransferCodeTypeEnum type;
    public VerificationBankTransferCode withType(VerificationBankTransferCodeTypeEnum type) {
        this.type = type;
        return this;
    }
}