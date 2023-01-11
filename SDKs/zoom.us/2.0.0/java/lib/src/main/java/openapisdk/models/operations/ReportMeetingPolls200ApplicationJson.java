package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportMeetingPolls200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ReportMeetingPolls200ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public ReportMeetingPolls200ApplicationJsonQuestions[] questions;
    public ReportMeetingPolls200ApplicationJson withQuestions(ReportMeetingPolls200ApplicationJsonQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public ReportMeetingPolls200ApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public ReportMeetingPolls200ApplicationJson withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}