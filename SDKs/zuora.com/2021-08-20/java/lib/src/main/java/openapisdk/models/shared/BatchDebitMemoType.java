package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDebitMemoType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public LocalDate dueDate;
    public BatchDebitMemoType withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BatchDebitMemoType withId(String id) {
        this.id = id;
        return this;
    }
}