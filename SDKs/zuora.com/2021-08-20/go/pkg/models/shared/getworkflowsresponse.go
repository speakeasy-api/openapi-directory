package shared

// GetWorkflowsResponsePagination
// An object containing pagination information for the list of workflows returned by the api
type GetWorkflowsResponsePagination struct {
	NextPage   *string `json:"next_page,omitempty"`
	Page       *int64  `json:"page,omitempty"`
	PageLength *int64  `json:"page_length,omitempty"`
}

type GetWorkflowsResponse struct {
	Data       []Workflow                      `json:"data,omitempty"`
	Pagination *GetWorkflowsResponsePagination `json:"pagination,omitempty"`
}
