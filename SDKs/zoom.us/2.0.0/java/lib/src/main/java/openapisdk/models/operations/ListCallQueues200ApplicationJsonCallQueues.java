package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallQueues200ApplicationJsonCallQueues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public ListCallQueues200ApplicationJsonCallQueues withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListCallQueues200ApplicationJsonCallQueues withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListCallQueues200ApplicationJsonCallQueues withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers[] phoneNumbers;
    public ListCallQueues200ApplicationJsonCallQueues withPhoneNumbers(ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public ListCallQueues200ApplicationJsonCallQueuesSite site;
    public ListCallQueues200ApplicationJsonCallQueues withSite(ListCallQueues200ApplicationJsonCallQueuesSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListCallQueues200ApplicationJsonCallQueuesStatusEnum status;
    public ListCallQueues200ApplicationJsonCallQueues withStatus(ListCallQueues200ApplicationJsonCallQueuesStatusEnum status) {
        this.status = status;
        return this;
    }
}