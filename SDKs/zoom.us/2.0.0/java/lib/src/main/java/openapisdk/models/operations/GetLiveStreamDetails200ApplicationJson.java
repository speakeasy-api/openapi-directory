package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLiveStreamDetails200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_url")
    public String pageUrl;
    public GetLiveStreamDetails200ApplicationJson withPageUrl(String pageUrl) {
        this.pageUrl = pageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream_key")
    public String streamKey;
    public GetLiveStreamDetails200ApplicationJson withStreamKey(String streamKey) {
        this.streamKey = streamKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream_url")
    public String streamUrl;
    public GetLiveStreamDetails200ApplicationJson withStreamUrl(String streamUrl) {
        this.streamUrl = streamUrl;
        return this;
    }
}