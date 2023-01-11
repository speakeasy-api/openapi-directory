package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * MeetingCreate201ApplicationJsonOccurrences
 * Occurence object. This object is only returned for Recurring Webinars.
**/
public class MeetingCreate201ApplicationJsonOccurrences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public MeetingCreate201ApplicationJsonOccurrences withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrence_id")
    public String occurrenceId;
    public MeetingCreate201ApplicationJsonOccurrences withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public MeetingCreate201ApplicationJsonOccurrences withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public MeetingCreate201ApplicationJsonOccurrences withStatus(String status) {
        this.status = status;
        return this;
    }
}