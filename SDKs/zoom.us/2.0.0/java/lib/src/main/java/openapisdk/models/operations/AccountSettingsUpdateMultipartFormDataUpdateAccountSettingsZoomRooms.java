package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms
 * Account Settings: Zoom Rooms.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_start_stop_scheduled_meetings")
    public Boolean autoStartStopScheduledMeetings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withAutoStartStopScheduledMeetings(Boolean autoStartStopScheduledMeetings) {
        this.autoStartStopScheduledMeetings = autoStartStopScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmr_for_instant_meeting")
    public Boolean cmrForInstantMeeting;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withCmrForInstantMeeting(Boolean cmrForInstantMeeting) {
        this.cmrForInstantMeeting = cmrForInstantMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_private_meeting")
    public Boolean forcePrivateMeeting;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withForcePrivateMeeting(Boolean forcePrivateMeeting) {
        this.forcePrivateMeeting = forcePrivateMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_host_information")
    public Boolean hideHostInformation;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withHideHostInformation(Boolean hideHostInformation) {
        this.hideHostInformation = hideHostInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_meetings_with_calendar")
    public Boolean listMeetingsWithCalendar;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withListMeetingsWithCalendar(Boolean listMeetingsWithCalendar) {
        this.listMeetingsWithCalendar = listMeetingsWithCalendar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_airplay_manually")
    public Boolean startAirplayManually;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withStartAirplayManually(Boolean startAirplayManually) {
        this.startAirplayManually = startAirplayManually;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultrasonic")
    public Boolean ultrasonic;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withUltrasonic(Boolean ultrasonic) {
        this.ultrasonic = ultrasonic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upcoming_meeting_alert")
    public Boolean upcomingMeetingAlert;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withUpcomingMeetingAlert(Boolean upcomingMeetingAlert) {
        this.upcomingMeetingAlert = upcomingMeetingAlert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly_system_restart")
    public Boolean weeklySystemRestart;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withWeeklySystemRestart(Boolean weeklySystemRestart) {
        this.weeklySystemRestart = weeklySystemRestart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zr_post_meeting_feedback")
    public Boolean zrPostMeetingFeedback;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms withZrPostMeetingFeedback(Boolean zrPostMeetingFeedback) {
        this.zrPostMeetingFeedback = zrPostMeetingFeedback;
        return this;
    }
}