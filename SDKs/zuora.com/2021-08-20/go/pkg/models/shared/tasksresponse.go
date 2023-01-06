package shared

// TasksResponsePagination
// An object containing pagination information for the list of tasks returned by the API.
type TasksResponsePagination struct {
	NextPage   *string `json:"next_page,omitempty"`
	Page       *int64  `json:"page,omitempty"`
	PageLength *int64  `json:"page_length,omitempty"`
}

type TasksResponse struct {
	Data       []Task                   `json:"data,omitempty"`
	Pagination *TasksResponsePagination `json:"pagination,omitempty"`
}
