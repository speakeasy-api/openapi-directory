package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvoiceFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public InvoiceFile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdfFileUrl")
    public String pdfFileUrl;
    public InvoiceFile withPdfFileUrl(String pdfFileUrl) {
        this.pdfFileUrl = pdfFileUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionNumber")
    public Long versionNumber;
    public InvoiceFile withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}