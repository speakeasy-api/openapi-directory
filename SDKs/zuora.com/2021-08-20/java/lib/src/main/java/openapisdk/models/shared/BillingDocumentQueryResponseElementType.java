package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BillingDocumentQueryResponseElementType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GetBillingDocumentsResponseType[] documents;
    public BillingDocumentQueryResponseElementType withDocuments(GetBillingDocumentsResponseType[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public BillingDocumentQueryResponseElementType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public BillingDocumentQueryResponseElementType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}