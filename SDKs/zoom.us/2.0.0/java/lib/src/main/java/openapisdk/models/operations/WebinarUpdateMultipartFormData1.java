package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * WebinarUpdateMultipartFormData1
 * Base webinar object for sessions.
**/
public class WebinarUpdateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=agenda")
    public String agenda;
    public WebinarUpdateMultipartFormData1 withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=duration")
    public Long duration;
    public WebinarUpdateMultipartFormData1 withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public WebinarUpdateMultipartFormData1 withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recurrence,json")
    public WebinarUpdateMultipartFormDataRecurrence recurrence;
    public WebinarUpdateMultipartFormData1 withRecurrence(WebinarUpdateMultipartFormDataRecurrence recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=settings,json")
    public WebinarUpdateMultipartFormDataSettings settings;
    public WebinarUpdateMultipartFormData1 withSettings(WebinarUpdateMultipartFormDataSettings settings) {
        this.settings = settings;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=start_time")
    public OffsetDateTime startTime;
    public WebinarUpdateMultipartFormData1 withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timezone")
    public String timezone;
    public WebinarUpdateMultipartFormData1 withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=topic")
    public String topic;
    public WebinarUpdateMultipartFormData1 withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tracking_fields,json")
    public WebinarUpdateMultipartFormDataTrackingFields[] trackingFields;
    public WebinarUpdateMultipartFormData1 withTrackingFields(WebinarUpdateMultipartFormDataTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public Long type;
    public WebinarUpdateMultipartFormData1 withType(Long type) {
        this.type = type;
        return this;
    }
}