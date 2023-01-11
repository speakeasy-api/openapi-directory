package openapisdk.models.operations;


public enum PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum {
    CONNECTION_RESET_BY_PEER("CONNECTION_RESET_BY_PEER"),
    EMPTY_RESPONSE("EMPTY_RESPONSE"),
    MALFORMED_RESPONSE_CHUNK("MALFORMED_RESPONSE_CHUNK"),
    RANDOM_DATA_THEN_CLOSE("RANDOM_DATA_THEN_CLOSE");

    public final String value;

    private PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum(String value) {
        this.value = value;
    }
}
