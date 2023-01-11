package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentPropertiesResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFileName")
    public String customFileName;
    public GetDocumentPropertiesResponseType withCustomFileName(String customFileName) {
        this.customFileName = customFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentId")
    public String documentId;
    public GetDocumentPropertiesResponseType withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentType")
    public GetDocumentPropertiesResponseTypeDocumentTypeEnum documentType;
    public GetDocumentPropertiesResponseType withDocumentType(GetDocumentPropertiesResponseTypeDocumentTypeEnum documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetDocumentPropertiesResponseType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetDocumentPropertiesResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}