package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingRecordingRegistrantCreate201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public MeetingRecordingRegistrantCreate201ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrant_id")
    public String registrantId;
    public MeetingRecordingRegistrantCreate201ApplicationJson withRegistrantId(String registrantId) {
        this.registrantId = registrantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_url")
    public String shareUrl;
    public MeetingRecordingRegistrantCreate201ApplicationJson withShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public MeetingRecordingRegistrantCreate201ApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}