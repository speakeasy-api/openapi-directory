package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddBatchWebinarRegistrants200ApplicationJsonRegistrants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AddBatchWebinarRegistrants200ApplicationJsonRegistrants withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_url")
    public String joinUrl;
    public AddBatchWebinarRegistrants200ApplicationJsonRegistrants withJoinUrl(String joinUrl) {
        this.joinUrl = joinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrant_id")
    public String registrantId;
    public AddBatchWebinarRegistrants200ApplicationJsonRegistrants withRegistrantId(String registrantId) {
        this.registrantId = registrantId;
        return this;
    }
}