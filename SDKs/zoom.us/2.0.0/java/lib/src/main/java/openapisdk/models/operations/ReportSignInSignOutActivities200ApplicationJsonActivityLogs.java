package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportSignInSignOutActivities200ApplicationJsonActivityLogs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_type")
    public String clientType;
    public ReportSignInSignOutActivities200ApplicationJsonActivityLogs withClientType(String clientType) {
        this.clientType = clientType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ReportSignInSignOutActivities200ApplicationJsonActivityLogs withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public ReportSignInSignOutActivities200ApplicationJsonActivityLogs withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("time")
    public OffsetDateTime time;
    public ReportSignInSignOutActivities200ApplicationJsonActivityLogs withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ReportSignInSignOutActivities200ApplicationJsonActivityLogs withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ReportSignInSignOutActivities200ApplicationJsonActivityLogs withVersion(String version) {
        this.version = version;
        return this;
    }
}