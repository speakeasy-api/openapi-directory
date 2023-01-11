package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingUpdateMultipartFormData1
 * Base object for sessions.
**/
public class MeetingUpdateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=agenda")
    public String agenda;
    public MeetingUpdateMultipartFormData1 withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=duration")
    public Long duration;
    public MeetingUpdateMultipartFormData1 withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public MeetingUpdateMultipartFormData1 withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recurrence,json")
    public MeetingUpdateMultipartFormDataRecurrence recurrence;
    public MeetingUpdateMultipartFormData1 withRecurrence(MeetingUpdateMultipartFormDataRecurrence recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schedule_for")
    public String scheduleFor;
    public MeetingUpdateMultipartFormData1 withScheduleFor(String scheduleFor) {
        this.scheduleFor = scheduleFor;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=settings,json")
    public MeetingUpdateMultipartFormDataSettings settings;
    public MeetingUpdateMultipartFormData1 withSettings(MeetingUpdateMultipartFormDataSettings settings) {
        this.settings = settings;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=start_time")
    public OffsetDateTime startTime;
    public MeetingUpdateMultipartFormData1 withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=template_id")
    public String templateId;
    public MeetingUpdateMultipartFormData1 withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timezone")
    public String timezone;
    public MeetingUpdateMultipartFormData1 withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=topic")
    public String topic;
    public MeetingUpdateMultipartFormData1 withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tracking_fields,json")
    public MeetingUpdateMultipartFormDataTrackingFields[] trackingFields;
    public MeetingUpdateMultipartFormData1 withTrackingFields(MeetingUpdateMultipartFormDataTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public Long type;
    public MeetingUpdateMultipartFormData1 withType(Long type) {
        this.type = type;
        return this;
    }
}