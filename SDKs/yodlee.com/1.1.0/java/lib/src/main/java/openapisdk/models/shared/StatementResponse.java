package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StatementResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statement")
    public Statement[] statement;
    public StatementResponse withStatement(Statement[] statement) {
        this.statement = statement;
        return this;
    }
}