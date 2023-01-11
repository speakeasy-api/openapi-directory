package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllOrdersResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetAllOrdersResponseType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orders")
    public Order[] orders;
    public GetAllOrdersResponseType withOrders(Order[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetAllOrdersResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}