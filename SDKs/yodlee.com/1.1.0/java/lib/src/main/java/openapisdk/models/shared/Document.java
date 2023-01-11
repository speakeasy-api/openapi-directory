package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Document {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountID")
    public Long accountID;
    public Document withAccountId(Long accountID) {
        this.accountID = accountID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docType")
    public DocumentDocTypeEnum docType;
    public Document withDocType(DocumentDocTypeEnum docType) {
        this.docType = docType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formType")
    public String formType;
    public Document withFormType(String formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Document withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public Document withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Document withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Document withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Document withStatus(String status) {
        this.status = status;
        return this;
    }
}