<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WalletobjectsEventticketclassAddmessageRequest(
    security=operations.WalletobjectsEventticketclassAddmessageSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.WalletobjectsEventticketclassAddmessagePathParams(
        resource_id="necessitatibus",
    ),
    query_params=operations.WalletobjectsEventticketclassAddmessageQueryParams(
        dollar_xgafv="2",
        access_token="cum",
        alt="json",
        callback="voluptas",
        fields="quis",
        key="repellat",
        oauth_token="quas",
        pretty_print=False,
        quota_user="occaecati",
        upload_type="facere",
        upload_protocol="fugit",
    ),
    request=shared.AddMessageRequest(
        message=shared.Message(
            body="aut",
            display_interval=shared.TimeInterval(
                end=shared.DateTime(
                    date_="iure",
                ),
                kind="voluptatibus",
                start=shared.DateTime(
                    date_="necessitatibus",
                ),
            ),
            header="ab",
            id="magni",
            kind="accusantium",
            localized_body=shared.LocalizedString(
                default_value=shared.TranslatedString(
                    kind="necessitatibus",
                    language="excepturi",
                    value="assumenda",
                ),
                kind="in",
                translated_values=[
                    shared.TranslatedString(
                        kind="laborum",
                        language="corrupti",
                        value="aut",
                    ),
                ],
            ),
            localized_header=shared.LocalizedString(
                default_value=shared.TranslatedString(
                    kind="voluptatem",
                    language="nemo",
                    value="adipisci",
                ),
                kind="voluptatem",
                translated_values=[
                    shared.TranslatedString(
                        kind="et",
                        language="modi",
                        value="quis",
                    ),
                    shared.TranslatedString(
                        kind="minus",
                        language="rerum",
                        value="animi",
                    ),
                    shared.TranslatedString(
                        kind="at",
                        language="consequatur",
                        value="non",
                    ),
                ],
            ),
            message_type="text",
        ),
    ),
)
    
res = s.eventticketclass.walletobjects_eventticketclass_addmessage(req)

if res.event_ticket_class_add_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->