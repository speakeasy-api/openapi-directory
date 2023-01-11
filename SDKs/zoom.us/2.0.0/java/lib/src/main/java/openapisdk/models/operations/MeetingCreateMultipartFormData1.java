package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingCreateMultipartFormData1
 * Base object for meeting.
**/
public class MeetingCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=agenda")
    public String agenda;
    public MeetingCreateMultipartFormData1 withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=duration")
    public Long duration;
    public MeetingCreateMultipartFormData1 withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public MeetingCreateMultipartFormData1 withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recurrence,json")
    public MeetingCreateMultipartFormDataRecurrence recurrence;
    public MeetingCreateMultipartFormData1 withRecurrence(MeetingCreateMultipartFormDataRecurrence recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule_for")
    public String scheduleFor;
    public MeetingCreateMultipartFormData1 withScheduleFor(String scheduleFor) {
        this.scheduleFor = scheduleFor;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=settings,json")
    public MeetingCreateMultipartFormDataSettings settings;
    public MeetingCreateMultipartFormData1 withSettings(MeetingCreateMultipartFormDataSettings settings) {
        this.settings = settings;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=start_time")
    public OffsetDateTime startTime;
    public MeetingCreateMultipartFormData1 withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=template_id")
    public String templateId;
    public MeetingCreateMultipartFormData1 withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timezone")
    public String timezone;
    public MeetingCreateMultipartFormData1 withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=topic")
    public String topic;
    public MeetingCreateMultipartFormData1 withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tracking_fields,json")
    public MeetingCreateMultipartFormDataTrackingFields[] trackingFields;
    public MeetingCreateMultipartFormData1 withTrackingFields(MeetingCreateMultipartFormDataTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public Long type;
    public MeetingCreateMultipartFormData1 withType(Long type) {
        this.type = type;
        return this;
    }
}