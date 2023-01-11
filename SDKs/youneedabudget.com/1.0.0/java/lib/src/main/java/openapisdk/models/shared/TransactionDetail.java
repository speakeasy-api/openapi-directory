package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionDetail {
    @JsonProperty("account_id")
    public String accountId;
    public TransactionDetail withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("account_name")
    public String accountName;
    public TransactionDetail withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonProperty("amount")
    public Long amount;
    public TransactionDetail withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("approved")
    public Boolean approved;
    public TransactionDetail withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public TransactionDetail withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_name")
    public String categoryName;
    public TransactionDetail withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonProperty("cleared")
    public TransactionDetailClearedEnum cleared;
    public TransactionDetail withCleared(TransactionDetailClearedEnum cleared) {
        this.cleared = cleared;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public TransactionDetail withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public TransactionDetail withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_color")
    public TransactionDetailFlagColorEnum flagColor;
    public TransactionDetail withFlagColor(TransactionDetailFlagColorEnum flagColor) {
        this.flagColor = flagColor;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public TransactionDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("import_id")
    public String importId;
    public TransactionDetail withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matched_transaction_id")
    public String matchedTransactionId;
    public TransactionDetail withMatchedTransactionId(String matchedTransactionId) {
        this.matchedTransactionId = matchedTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public TransactionDetail withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public TransactionDetail withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public TransactionDetail withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonProperty("subtransactions")
    public SubTransaction[] subtransactions;
    public TransactionDetail withSubtransactions(SubTransaction[] subtransactions) {
        this.subtransactions = subtransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_account_id")
    public String transferAccountId;
    public TransactionDetail withTransferAccountId(String transferAccountId) {
        this.transferAccountId = transferAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_transaction_id")
    public String transferTransactionId;
    public TransactionDetail withTransferTransactionId(String transferTransactionId) {
        this.transferTransactionId = transferTransactionId;
        return this;
    }
}