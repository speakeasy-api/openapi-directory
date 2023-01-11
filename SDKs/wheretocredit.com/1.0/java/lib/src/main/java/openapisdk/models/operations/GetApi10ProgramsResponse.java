package openapisdk.models.operations;



public class GetApi10ProgramsResponse {
    public String contentType;
    public GetApi10ProgramsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Program[] programs;
    public GetApi10ProgramsResponse withPrograms(openapisdk.models.shared.Program[] programs) {
        this.programs = programs;
        return this;
    }
    public Long statusCode;
    public GetApi10ProgramsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}