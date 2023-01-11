package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetJournalRunType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregateCurrency")
    public Boolean aggregateCurrency;
    public GetJournalRunType withAggregateCurrency(Boolean aggregateCurrency) {
        this.aggregateCurrency = aggregateCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("executedOn")
    public OffsetDateTime executedOn;
    public GetJournalRunType withExecutedOn(OffsetDateTime executedOn) {
        this.executedOn = executedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journalEntryDate")
    public LocalDate journalEntryDate;
    public GetJournalRunType withJournalEntryDate(LocalDate journalEntryDate) {
        this.journalEntryDate = journalEntryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public GetJournalRunType withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationRuleName")
    public String segmentationRuleName;
    public GetJournalRunType withSegmentationRuleName(String segmentationRuleName) {
        this.segmentationRuleName = segmentationRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetJournalRunTypeStatusEnum status;
    public GetJournalRunType withStatus(GetJournalRunTypeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetJournalRunType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetEndDate")
    public LocalDate targetEndDate;
    public GetJournalRunType withTargetEndDate(LocalDate targetEndDate) {
        this.targetEndDate = targetEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetStartDate")
    public LocalDate targetStartDate;
    public GetJournalRunType withTargetStartDate(LocalDate targetStartDate) {
        this.targetStartDate = targetStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalJournalEntryCount")
    public Long totalJournalEntryCount;
    public GetJournalRunType withTotalJournalEntryCount(Long totalJournalEntryCount) {
        this.totalJournalEntryCount = totalJournalEntryCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionTypes")
    public GetJournalRunTransactionType[] transactionTypes;
    public GetJournalRunType withTransactionTypes(GetJournalRunTransactionType[] transactionTypes) {
        this.transactionTypes = transactionTypes;
        return this;
    }
}