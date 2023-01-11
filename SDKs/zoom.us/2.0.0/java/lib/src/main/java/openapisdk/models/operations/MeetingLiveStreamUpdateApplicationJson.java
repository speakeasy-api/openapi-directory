package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingLiveStreamUpdateApplicationJson
 * Meeting live stream.
**/
public class MeetingLiveStreamUpdateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_url")
    public String pageUrl;
    public MeetingLiveStreamUpdateApplicationJson withPageUrl(String pageUrl) {
        this.pageUrl = pageUrl;
        return this;
    }
    @JsonProperty("stream_key")
    public String streamKey;
    public MeetingLiveStreamUpdateApplicationJson withStreamKey(String streamKey) {
        this.streamKey = streamKey;
        return this;
    }
    @JsonProperty("stream_url")
    public String streamUrl;
    public MeetingLiveStreamUpdateApplicationJson withStreamUrl(String streamUrl) {
        this.streamUrl = streamUrl;
        return this;
    }
}