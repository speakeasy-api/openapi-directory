package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docContent")
    public String docContent;
    public DocumentDownload withDocContent(String docContent) {
        this.docContent = docContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DocumentDownload withId(String id) {
        this.id = id;
        return this;
    }
}