package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduledTransactionDetail {
    @JsonProperty("account_id")
    public String accountId;
    public ScheduledTransactionDetail withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("account_name")
    public String accountName;
    public ScheduledTransactionDetail withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonProperty("amount")
    public Long amount;
    public ScheduledTransactionDetail withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public ScheduledTransactionDetail withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_name")
    public String categoryName;
    public ScheduledTransactionDetail withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonProperty("date_first")
    public LocalDate dateFirst;
    public ScheduledTransactionDetail withDateFirst(LocalDate dateFirst) {
        this.dateFirst = dateFirst;
        return this;
    }
    @JsonProperty("date_next")
    public LocalDate dateNext;
    public ScheduledTransactionDetail withDateNext(LocalDate dateNext) {
        this.dateNext = dateNext;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public ScheduledTransactionDetail withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_color")
    public ScheduledTransactionDetailFlagColorEnum flagColor;
    public ScheduledTransactionDetail withFlagColor(ScheduledTransactionDetailFlagColorEnum flagColor) {
        this.flagColor = flagColor;
        return this;
    }
    @JsonProperty("frequency")
    public ScheduledTransactionDetailFrequencyEnum frequency;
    public ScheduledTransactionDetail withFrequency(ScheduledTransactionDetailFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScheduledTransactionDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public ScheduledTransactionDetail withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public ScheduledTransactionDetail withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public ScheduledTransactionDetail withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonProperty("subtransactions")
    public ScheduledSubTransaction[] subtransactions;
    public ScheduledTransactionDetail withSubtransactions(ScheduledSubTransaction[] subtransactions) {
        this.subtransactions = subtransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_account_id")
    public String transferAccountId;
    public ScheduledTransactionDetail withTransferAccountId(String transferAccountId) {
        this.transferAccountId = transferAccountId;
        return this;
    }
}