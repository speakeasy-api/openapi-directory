package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantStatusMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=action")
    public MeetingRegistrantStatusMultipartFormDataActionEnum action;
    public MeetingRegistrantStatusMultipartFormData1 withAction(MeetingRegistrantStatusMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=registrants,json")
    public MeetingRegistrantStatusMultipartFormDataRegistrants[] registrants;
    public MeetingRegistrantStatusMultipartFormData1 withRegistrants(MeetingRegistrantStatusMultipartFormDataRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
}