package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetHostedPageType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageId")
    public String pageId;
    public GetHostedPageType withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageName")
    public String pageName;
    public GetHostedPageType withPageName(String pageName) {
        this.pageName = pageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageType")
    public String pageType;
    public GetHostedPageType withPageType(String pageType) {
        this.pageType = pageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageVersion")
    public String pageVersion;
    public GetHostedPageType withPageVersion(String pageVersion) {
        this.pageVersion = pageVersion;
        return this;
    }
}