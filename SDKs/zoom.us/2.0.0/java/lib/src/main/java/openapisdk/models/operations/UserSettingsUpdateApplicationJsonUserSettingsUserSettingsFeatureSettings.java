package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_meeting")
    public Boolean largeMeeting;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings withLargeMeeting(Boolean largeMeeting) {
        this.largeMeeting = largeMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_meeting_capacity")
    public Long largeMeetingCapacity;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings withLargeMeetingCapacity(Long largeMeetingCapacity) {
        this.largeMeetingCapacity = largeMeetingCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_capacity")
    public Long meetingCapacity;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings withMeetingCapacity(Long meetingCapacity) {
        this.meetingCapacity = meetingCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar")
    public Boolean webinar;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings withWebinar(Boolean webinar) {
        this.webinar = webinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_capacity")
    public Long webinarCapacity;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings withWebinarCapacity(Long webinarCapacity) {
        this.webinarCapacity = webinarCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_phone")
    public Boolean zoomPhone;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings withZoomPhone(Boolean zoomPhone) {
        this.zoomPhone = zoomPhone;
        return this;
    }
}