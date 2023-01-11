package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * WebinarCreateMultipartFormData1
 * Base webinar object for sessions.
**/
public class WebinarCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=agenda")
    public String agenda;
    public WebinarCreateMultipartFormData1 withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=duration")
    public Long duration;
    public WebinarCreateMultipartFormData1 withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public WebinarCreateMultipartFormData1 withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recurrence,json")
    public WebinarCreateMultipartFormDataRecurrenceWebinar recurrence;
    public WebinarCreateMultipartFormData1 withRecurrence(WebinarCreateMultipartFormDataRecurrenceWebinar recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=settings,json")
    public WebinarCreateMultipartFormDataSettings settings;
    public WebinarCreateMultipartFormData1 withSettings(WebinarCreateMultipartFormDataSettings settings) {
        this.settings = settings;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=start_time")
    public OffsetDateTime startTime;
    public WebinarCreateMultipartFormData1 withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timezone")
    public String timezone;
    public WebinarCreateMultipartFormData1 withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=topic")
    public String topic;
    public WebinarCreateMultipartFormData1 withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tracking_fields,json")
    public WebinarCreateMultipartFormDataTrackingFields[] trackingFields;
    public WebinarCreateMultipartFormData1 withTrackingFields(WebinarCreateMultipartFormDataTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public Long type;
    public WebinarCreateMultipartFormData1 withType(Long type) {
        this.type = type;
        return this;
    }
}