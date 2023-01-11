package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostJournalRunType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingPeriodName")
    public String accountingPeriodName;
    public PostJournalRunType withAccountingPeriodName(String accountingPeriodName) {
        this.accountingPeriodName = accountingPeriodName;
        return this;
    }
    @JsonProperty("journalEntryDate")
    public LocalDate journalEntryDate;
    public PostJournalRunType withJournalEntryDate(LocalDate journalEntryDate) {
        this.journalEntryDate = journalEntryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetEndDate")
    public LocalDate targetEndDate;
    public PostJournalRunType withTargetEndDate(LocalDate targetEndDate) {
        this.targetEndDate = targetEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetStartDate")
    public LocalDate targetStartDate;
    public PostJournalRunType withTargetStartDate(LocalDate targetStartDate) {
        this.targetStartDate = targetStartDate;
        return this;
    }
    @JsonProperty("transactionTypes")
    public PostJournalRunTransactionType[] transactionTypes;
    public PostJournalRunType withTransactionTypes(PostJournalRunTransactionType[] transactionTypes) {
        this.transactionTypes = transactionTypes;
        return this;
    }
}