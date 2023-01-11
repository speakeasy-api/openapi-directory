package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionSummary {
    @JsonProperty("account_id")
    public String accountId;
    public TransactionSummary withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("amount")
    public Long amount;
    public TransactionSummary withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("approved")
    public Boolean approved;
    public TransactionSummary withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public TransactionSummary withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonProperty("cleared")
    public TransactionSummaryClearedEnum cleared;
    public TransactionSummary withCleared(TransactionSummaryClearedEnum cleared) {
        this.cleared = cleared;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public TransactionSummary withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public TransactionSummary withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_color")
    public TransactionSummaryFlagColorEnum flagColor;
    public TransactionSummary withFlagColor(TransactionSummaryFlagColorEnum flagColor) {
        this.flagColor = flagColor;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public TransactionSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("import_id")
    public String importId;
    public TransactionSummary withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matched_transaction_id")
    public String matchedTransactionId;
    public TransactionSummary withMatchedTransactionId(String matchedTransactionId) {
        this.matchedTransactionId = matchedTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public TransactionSummary withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public TransactionSummary withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_account_id")
    public String transferAccountId;
    public TransactionSummary withTransferAccountId(String transferAccountId) {
        this.transferAccountId = transferAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_transaction_id")
    public String transferTransactionId;
    public TransactionSummary withTransferTransactionId(String transferTransactionId) {
        this.transferTransactionId = transferTransactionId;
        return this;
    }
}