package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingLiveStreamUpdateMultipartFormData
 * Meeting live stream.
**/
public class MeetingLiveStreamUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=page_url")
    public String pageUrl;
    public MeetingLiveStreamUpdateMultipartFormData withPageUrl(String pageUrl) {
        this.pageUrl = pageUrl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=stream_key")
    public String streamKey;
    public MeetingLiveStreamUpdateMultipartFormData withStreamKey(String streamKey) {
        this.streamKey = streamKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=stream_url")
    public String streamUrl;
    public MeetingLiveStreamUpdateMultipartFormData withStreamUrl(String streamUrl) {
        this.streamUrl = streamUrl;
        return this;
    }
}