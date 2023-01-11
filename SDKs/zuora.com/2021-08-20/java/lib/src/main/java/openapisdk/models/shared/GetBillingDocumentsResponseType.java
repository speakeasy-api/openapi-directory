package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBillingDocumentsResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public GetBillingDocumentsResponseType withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetBillingDocumentsResponseType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public GetBillingDocumentsResponseType withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentDate")
    public LocalDate documentDate;
    public GetBillingDocumentsResponseType withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentNumber")
    public String documentNumber;
    public GetBillingDocumentsResponseType withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentType")
    public GetBillingDocumentsResponseTypeDocumentTypeEnum documentType;
    public GetBillingDocumentsResponseType withDocumentType(GetBillingDocumentsResponseTypeDocumentTypeEnum documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetBillingDocumentsResponseType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetBillingDocumentsResponseTypeStatusEnum status;
    public GetBillingDocumentsResponseType withStatus(GetBillingDocumentsResponseTypeStatusEnum status) {
        this.status = status;
        return this;
    }
}