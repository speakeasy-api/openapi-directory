package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetCallQoS200ApplicationJsonCallerQosSending {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public GetCallQoS200ApplicationJsonCallerQosSending withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qos")
    public GetCallQoS200ApplicationJsonCallerQosSendingQos qos;
    public GetCallQoS200ApplicationJsonCallerQosSending withQos(GetCallQoS200ApplicationJsonCallerQosSendingQos qos) {
        this.qos = qos;
        return this;
    }
}