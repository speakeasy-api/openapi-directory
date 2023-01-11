package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingLiveStreamStatusUpdateMultipartFormData
 * Meeting live stream status.
**/
public class MeetingLiveStreamStatusUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum action;
    public MeetingLiveStreamStatusUpdateMultipartFormData withAction(MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=settings,json")
    public MeetingLiveStreamStatusUpdateMultipartFormDataSettings settings;
    public MeetingLiveStreamStatusUpdateMultipartFormData withSettings(MeetingLiveStreamStatusUpdateMultipartFormDataSettings settings) {
        this.settings = settings;
        return this;
    }
}