package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPolls201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polls")
    public CreateBatchPolls201ApplicationJsonPolls[] polls;
    public CreateBatchPolls201ApplicationJson withPolls(CreateBatchPolls201ApplicationJsonPolls[] polls) {
        this.polls = polls;
        return this;
    }
}