package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostrsaSignatureType {
    @JsonProperty("method")
    public String method;
    public PostrsaSignatureType withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("pageId")
    public String pageId;
    public PostrsaSignatureType withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PostrsaSignatureType withUri(String uri) {
        this.uri = uri;
        return this;
    }
}