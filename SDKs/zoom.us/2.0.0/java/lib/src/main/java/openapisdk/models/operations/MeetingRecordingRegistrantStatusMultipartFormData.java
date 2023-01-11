package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingRecordingRegistrantStatusMultipartFormData
 * Registrant Status
**/
public class MeetingRecordingRegistrantStatusMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public MeetingRecordingRegistrantStatusMultipartFormDataActionEnum action;
    public MeetingRecordingRegistrantStatusMultipartFormData withAction(MeetingRecordingRegistrantStatusMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=registrants,json")
    public Object[] registrants;
    public MeetingRecordingRegistrantStatusMultipartFormData withRegistrants(Object[] registrants) {
        this.registrants = registrants;
        return this;
    }
}