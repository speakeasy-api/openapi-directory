package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyGetRefundInvoicePayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public ProxyGetRefundInvoicePayment withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public ProxyGetRefundInvoicePayment withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetRefundInvoicePayment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceId")
    public String invoiceId;
    public ProxyGetRefundInvoicePayment withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoicePaymentId")
    public String invoicePaymentId;
    public ProxyGetRefundInvoicePayment withInvoicePaymentId(String invoicePaymentId) {
        this.invoicePaymentId = invoicePaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefundAmount")
    public Double refundAmount;
    public ProxyGetRefundInvoicePayment withRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefundId")
    public String refundId;
    public ProxyGetRefundInvoicePayment withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public ProxyGetRefundInvoicePayment withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public ProxyGetRefundInvoicePayment withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}