package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HybridTransaction {
    @JsonProperty("account_id")
    public String accountId;
    public HybridTransaction withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("account_name")
    public String accountName;
    public HybridTransaction withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonProperty("amount")
    public Long amount;
    public HybridTransaction withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("approved")
    public Boolean approved;
    public HybridTransaction withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public HybridTransaction withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_name")
    public String categoryName;
    public HybridTransaction withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonProperty("cleared")
    public HybridTransactionClearedEnum cleared;
    public HybridTransaction withCleared(HybridTransactionClearedEnum cleared) {
        this.cleared = cleared;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public HybridTransaction withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public HybridTransaction withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_color")
    public HybridTransactionFlagColorEnum flagColor;
    public HybridTransaction withFlagColor(HybridTransactionFlagColorEnum flagColor) {
        this.flagColor = flagColor;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public HybridTransaction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("import_id")
    public String importId;
    public HybridTransaction withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matched_transaction_id")
    public String matchedTransactionId;
    public HybridTransaction withMatchedTransactionId(String matchedTransactionId) {
        this.matchedTransactionId = matchedTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public HybridTransaction withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_transaction_id")
    public String parentTransactionId;
    public HybridTransaction withParentTransactionId(String parentTransactionId) {
        this.parentTransactionId = parentTransactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public HybridTransaction withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public HybridTransaction withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_account_id")
    public String transferAccountId;
    public HybridTransaction withTransferAccountId(String transferAccountId) {
        this.transferAccountId = transferAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_transaction_id")
    public String transferTransactionId;
    public HybridTransaction withTransferTransactionId(String transferTransactionId) {
        this.transferTransactionId = transferTransactionId;
        return this;
    }
    @JsonProperty("type")
    public HybridTransactionTypeEnum type;
    public HybridTransaction withType(HybridTransactionTypeEnum type) {
        this.type = type;
        return this;
    }
}