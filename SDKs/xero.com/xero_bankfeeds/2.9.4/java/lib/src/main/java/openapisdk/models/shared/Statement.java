package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Statement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endBalance")
    public EndBalance endBalance;
    public Statement withEndBalance(EndBalance endBalance) {
        this.endBalance = endBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public Statement withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public Statement withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedConnectionId")
    public String feedConnectionId;
    public Statement withFeedConnectionId(String feedConnectionId) {
        this.feedConnectionId = feedConnectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Statement withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startBalance")
    public StartBalance startBalance;
    public Statement withStartBalance(StartBalance startBalance) {
        this.startBalance = startBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public Statement withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statementLineCount")
    public Long statementLineCount;
    public Statement withStatementLineCount(Long statementLineCount) {
        this.statementLineCount = statementLineCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statementLines")
    public StatementLine[] statementLines;
    public Statement withStatementLines(StatementLine[] statementLines) {
        this.statementLines = statementLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Object status;
    public Statement withStatus(Object status) {
        this.status = status;
        return this;
    }
}