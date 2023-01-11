package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDebitMemoCollect200ApplicationJsonDebitMemo
 * The information about the debit memo that just collected.
 * 
**/
public class PostDebitMemoCollect200ApplicationJsonDebitMemo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostDebitMemoCollect200ApplicationJsonDebitMemo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PostDebitMemoCollect200ApplicationJsonDebitMemo withNumber(String number) {
        this.number = number;
        return this;
    }
}