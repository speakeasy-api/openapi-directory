package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document[] document;
    public DocumentResponse withDocument(Document[] document) {
        this.document = document;
        return this;
    }
}