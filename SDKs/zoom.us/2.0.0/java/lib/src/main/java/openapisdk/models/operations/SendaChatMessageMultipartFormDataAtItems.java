package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendaChatMessageMultipartFormDataAtItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("at_contact")
    public String atContact;
    public SendaChatMessageMultipartFormDataAtItems withAtContact(String atContact) {
        this.atContact = atContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("at_type")
    public Long atType;
    public SendaChatMessageMultipartFormDataAtItems withAtType(Long atType) {
        this.atType = atType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_position")
    public Long endPosition;
    public SendaChatMessageMultipartFormDataAtItems withEndPosition(Long endPosition) {
        this.endPosition = endPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_position")
    public Long startPosition;
    public SendaChatMessageMultipartFormDataAtItems withStartPosition(Long startPosition) {
        this.startPosition = startPosition;
        return this;
    }
}