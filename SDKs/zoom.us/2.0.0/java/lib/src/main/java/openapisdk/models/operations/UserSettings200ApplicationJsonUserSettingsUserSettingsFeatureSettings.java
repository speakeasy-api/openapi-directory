package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cn_meeting")
    public Boolean cnMeeting;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withCnMeeting(Boolean cnMeeting) {
        this.cnMeeting = cnMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting")
    public Boolean inMeeting;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withInMeeting(Boolean inMeeting) {
        this.inMeeting = inMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_meeting")
    public Boolean largeMeeting;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withLargeMeeting(Boolean largeMeeting) {
        this.largeMeeting = largeMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_meeting_capacity")
    public Long largeMeetingCapacity;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withLargeMeetingCapacity(Long largeMeetingCapacity) {
        this.largeMeetingCapacity = largeMeetingCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_capacity")
    public Long meetingCapacity;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withMeetingCapacity(Long meetingCapacity) {
        this.meetingCapacity = meetingCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar")
    public Boolean webinar;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withWebinar(Boolean webinar) {
        this.webinar = webinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_capacity")
    public Long webinarCapacity;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withWebinarCapacity(Long webinarCapacity) {
        this.webinarCapacity = webinarCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_phone")
    public Boolean zoomPhone;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings withZoomPhone(Boolean zoomPhone) {
        this.zoomPhone = zoomPhone;
        return this;
    }
}