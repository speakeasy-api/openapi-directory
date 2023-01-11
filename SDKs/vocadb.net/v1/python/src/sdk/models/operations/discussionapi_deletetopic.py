import dataclasses



@dataclasses.dataclass
class DiscussionAPIDeleteTopicPathParams:
    topic_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DiscussionAPIDeleteTopicRequest:
    path_params: DiscussionAPIDeleteTopicPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DiscussionAPIDeleteTopicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
