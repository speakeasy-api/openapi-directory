package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum source;
    public ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers withSource(ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum source) {
        this.source = source;
        return this;
    }
}