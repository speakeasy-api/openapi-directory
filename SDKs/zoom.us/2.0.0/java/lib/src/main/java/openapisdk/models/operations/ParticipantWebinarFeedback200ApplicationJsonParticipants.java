package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ParticipantWebinarFeedback200ApplicationJsonParticipants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public ParticipantWebinarFeedback200ApplicationJsonParticipants withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ParticipantWebinarFeedback200ApplicationJsonParticipants withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum quality;
    public ParticipantWebinarFeedback200ApplicationJsonParticipants withQuality(ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public ParticipantWebinarFeedback200ApplicationJsonParticipants withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}