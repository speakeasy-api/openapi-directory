package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduledTransactionSummary {
    @JsonProperty("account_id")
    public String accountId;
    public ScheduledTransactionSummary withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("amount")
    public Long amount;
    public ScheduledTransactionSummary withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public ScheduledTransactionSummary withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonProperty("date_first")
    public LocalDate dateFirst;
    public ScheduledTransactionSummary withDateFirst(LocalDate dateFirst) {
        this.dateFirst = dateFirst;
        return this;
    }
    @JsonProperty("date_next")
    public LocalDate dateNext;
    public ScheduledTransactionSummary withDateNext(LocalDate dateNext) {
        this.dateNext = dateNext;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public ScheduledTransactionSummary withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_color")
    public ScheduledTransactionSummaryFlagColorEnum flagColor;
    public ScheduledTransactionSummary withFlagColor(ScheduledTransactionSummaryFlagColorEnum flagColor) {
        this.flagColor = flagColor;
        return this;
    }
    @JsonProperty("frequency")
    public ScheduledTransactionSummaryFrequencyEnum frequency;
    public ScheduledTransactionSummary withFrequency(ScheduledTransactionSummaryFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScheduledTransactionSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public ScheduledTransactionSummary withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public ScheduledTransactionSummary withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_account_id")
    public String transferAccountId;
    public ScheduledTransactionSummary withTransferAccountId(String transferAccountId) {
        this.transferAccountId = transferAccountId;
        return this;
    }
}