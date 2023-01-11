package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentDownloadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public DocumentDownload[] document;
    public DocumentDownloadResponse withDocument(DocumentDownload[] document) {
        this.document = document;
        return this;
    }
}