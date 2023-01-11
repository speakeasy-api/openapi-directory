package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cancel_meeting_reminder")
    public String cancelMeetingReminder;
    public MeetingDeleteQueryParams withCancelMeetingReminder(String cancelMeetingReminder) {
        this.cancelMeetingReminder = cancelMeetingReminder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public MeetingDeleteQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=schedule_for_reminder")
    public Boolean scheduleForReminder;
    public MeetingDeleteQueryParams withScheduleForReminder(Boolean scheduleForReminder) {
        this.scheduleForReminder = scheduleForReminder;
        return this;
    }
}