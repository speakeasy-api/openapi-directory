package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsZoomRooms
 * Account Settings: Zoom Rooms.
**/
public class AccountSettings200ApplicationJsonAccountSettingsZoomRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_start_stop_scheduled_meetings")
    public Boolean autoStartStopScheduledMeetings;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withAutoStartStopScheduledMeetings(Boolean autoStartStopScheduledMeetings) {
        this.autoStartStopScheduledMeetings = autoStartStopScheduledMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmr_for_instant_meeting")
    public Boolean cmrForInstantMeeting;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withCmrForInstantMeeting(Boolean cmrForInstantMeeting) {
        this.cmrForInstantMeeting = cmrForInstantMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_private_meeting")
    public Boolean forcePrivateMeeting;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withForcePrivateMeeting(Boolean forcePrivateMeeting) {
        this.forcePrivateMeeting = forcePrivateMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_host_information")
    public Boolean hideHostInformation;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withHideHostInformation(Boolean hideHostInformation) {
        this.hideHostInformation = hideHostInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_meetings_with_calendar")
    public Boolean listMeetingsWithCalendar;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withListMeetingsWithCalendar(Boolean listMeetingsWithCalendar) {
        this.listMeetingsWithCalendar = listMeetingsWithCalendar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_airplay_manually")
    public Boolean startAirplayManually;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withStartAirplayManually(Boolean startAirplayManually) {
        this.startAirplayManually = startAirplayManually;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ultrasonic")
    public Boolean ultrasonic;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withUltrasonic(Boolean ultrasonic) {
        this.ultrasonic = ultrasonic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upcoming_meeting_alert")
    public Boolean upcomingMeetingAlert;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withUpcomingMeetingAlert(Boolean upcomingMeetingAlert) {
        this.upcomingMeetingAlert = upcomingMeetingAlert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly_system_restart")
    public Boolean weeklySystemRestart;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withWeeklySystemRestart(Boolean weeklySystemRestart) {
        this.weeklySystemRestart = weeklySystemRestart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zr_post_meeting_feedback")
    public Boolean zrPostMeetingFeedback;
    public AccountSettings200ApplicationJsonAccountSettingsZoomRooms withZrPostMeetingFeedback(Boolean zrPostMeetingFeedback) {
        this.zrPostMeetingFeedback = zrPostMeetingFeedback;
        return this;
    }
}