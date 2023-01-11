package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RefundPartResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public RefundPartResponseType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdById")
    public String createdById;
    public RefundPartResponseType withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public RefundPartResponseType withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoId")
    public String creditMemoId;
    public RefundPartResponseType withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RefundPartResponseType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public RefundPartResponseType withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public RefundPartResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedById")
    public String updatedById;
    public RefundPartResponseType withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedDate")
    public OffsetDateTime updatedDate;
    public RefundPartResponseType withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}