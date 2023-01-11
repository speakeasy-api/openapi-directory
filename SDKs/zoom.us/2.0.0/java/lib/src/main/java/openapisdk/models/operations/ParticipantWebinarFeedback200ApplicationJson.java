package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ParticipantWebinarFeedback200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ParticipantWebinarFeedback200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ParticipantWebinarFeedback200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public ParticipantWebinarFeedback200ApplicationJsonParticipants[] participants;
    public ParticipantWebinarFeedback200ApplicationJson withParticipants(ParticipantWebinarFeedback200ApplicationJsonParticipants[] participants) {
        this.participants = participants;
        return this;
    }
}