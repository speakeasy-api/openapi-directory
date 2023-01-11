package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDocumentPropertiesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFileName")
    public String customFileName;
    public PostDocumentPropertiesType withCustomFileName(String customFileName) {
        this.customFileName = customFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentId")
    public String documentId;
    public PostDocumentPropertiesType withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentType")
    public PostDocumentPropertiesTypeDocumentTypeEnum documentType;
    public PostDocumentPropertiesType withDocumentType(PostDocumentPropertiesTypeDocumentTypeEnum documentType) {
        this.documentType = documentType;
        return this;
    }
}