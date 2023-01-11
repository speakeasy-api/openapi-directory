package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetCreditMemoItemPartTypewithSuccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetCreditMemoItemPartTypewithSuccess withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public GetCreditMemoItemPartTypewithSuccess withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public GetCreditMemoItemPartTypewithSuccess withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoItemId")
    public String creditMemoItemId;
    public GetCreditMemoItemPartTypewithSuccess withCreditMemoItemId(String creditMemoItemId) {
        this.creditMemoItemId = creditMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTaxItemId")
    public String creditTaxItemId;
    public GetCreditMemoItemPartTypewithSuccess withCreditTaxItemId(String creditTaxItemId) {
        this.creditTaxItemId = creditTaxItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemoItemId")
    public String debitMemoItemId;
    public GetCreditMemoItemPartTypewithSuccess withDebitMemoItemId(String debitMemoItemId) {
        this.debitMemoItemId = debitMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetCreditMemoItemPartTypewithSuccess withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItemId")
    public String invoiceItemId;
    public GetCreditMemoItemPartTypewithSuccess withInvoiceItemId(String invoiceItemId) {
        this.invoiceItemId = invoiceItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxItemId")
    public String taxItemId;
    public GetCreditMemoItemPartTypewithSuccess withTaxItemId(String taxItemId) {
        this.taxItemId = taxItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public GetCreditMemoItemPartTypewithSuccess withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public GetCreditMemoItemPartTypewithSuccess withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}