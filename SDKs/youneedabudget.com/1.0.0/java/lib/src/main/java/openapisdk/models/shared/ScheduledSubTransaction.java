package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduledSubTransaction {
    @JsonProperty("amount")
    public Long amount;
    public ScheduledSubTransaction withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public ScheduledSubTransaction withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public ScheduledSubTransaction withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScheduledSubTransaction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public ScheduledSubTransaction withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public ScheduledSubTransaction withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonProperty("scheduled_transaction_id")
    public String scheduledTransactionId;
    public ScheduledSubTransaction withScheduledTransactionId(String scheduledTransactionId) {
        this.scheduledTransactionId = scheduledTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_account_id")
    public String transferAccountId;
    public ScheduledSubTransaction withTransferAccountId(String transferAccountId) {
        this.transferAccountId = transferAccountId;
        return this;
    }
}